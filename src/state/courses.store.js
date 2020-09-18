import Axios from 'axios'
import { action, observable, decorate } from 'mobx'
import { navigate } from '@reach/router'
import { observer } from 'mobx-react'

const COURSE_ENDPOINT = `${process.env.REACT_APP_API_URL}/vendors`
const token = localStorage.getItem('token')

class CourseStore {
  courses = [] // multiple courses
  course = [] // single course
  isLoading = false

  fetchCourse = id => {}

  fetchCourses = () => {
    let resData = []

    Axios.get(`${COURSE_ENDPOINT}/getfiles`, { headers: { 'x-auth-token': token } })
      .then(res => {
        resData.push(res.data.files)
      })
      .catch(e => console.log(e))

    return resData
  }

  createCourse = (name, description, price, duration, coverImage) => {
    const id = localStorage.getItem('userId')

    Axios.post(
      `${COURSE_ENDPOINT}/${id}/newCourse`,
      {
        data: {
          name: name,
          descrp: description,
          price: price,
          duration: duration,
          coverImage: coverImage
        }
      },
      { headers: { 'x-auth-token': token } }
    )
      .then(res => console.log(res))
      .catch(e => console.log(e))
  }

  getMyCourses = () => {
    const id = localStorage.getItem('userId')
    const token = localStorage.getItem('token')

    Axios.get(`${COURSE_ENDPOINT}/${id}/courses`, { headers: { 'x-auth-token': token } })
      .then(res => {
        this.courses = res.data.courses
      })
      .catch(e => console.log(e))
  }

  getMyCourse = id => {
    this.isLoading = true
    const userId = localStorage.getItem('userId')
    const token = localStorage.getItem('token')

    Axios.get(`${COURSE_ENDPOINT}/${userId}/courses/${id}`, {
      headers: {
        'x-auth-token': token
      }
    })
      .then(res => {
        this.isLoading = false
        this.course = res.data.course
      })
      .catch(e => {
        this.isLoading = false

        console.log(e)
      })
  }
}

const DecoratedCourseStore = decorate(CourseStore, {
  //observables
  courses: observable,
  course: observable,
  isLoading: observable,

  //actions
  getMyCourses: action,
  getMyCourse: action,
  fetchCourse: action,
  createCourse: action,
  fetchCourses: action
})

const store = new DecoratedCourseStore()

export default store
