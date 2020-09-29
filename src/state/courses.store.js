import Axios from 'axios'
import { action, observable, decorate } from 'mobx'
import { navigate } from '@reach/router'
// import * as Form from 'form-data'

const COURSE_ENDPOINT = `${process.env.REACT_APP_PRODUCTION_API_URI}/vendors`
const token = localStorage.getItem('token')

class CourseStore {
  courses = [] // multiple courses
  course = [] // single course
  isLoading = false
  errorLoading = false

  fetchCourses = () => {
    this.isLoading = true
    Axios.get(`${COURSE_ENDPOINT}/courses/find-all`, { headers: { 'x-auth-token': token } })
      .then(res => {
        console.log(res)
        this.courses = res.data.courses
        this.isLoading = false
      })
      .catch(e => {
        console.log(e)
        this.errorLoading = true
      })
  }

  createCourse = (name, description, price, duration, coverImage) => {
    const id = localStorage.getItem('userId')
    const formData = new FormData()

    formData.append('file', coverImage)

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
      .then(res => {
        if (coverImage) {
          console.log('no image')
          Axios.post(`${COURSE_ENDPOINT}/courses/${res.data.courseId}/add`, formData, {
            headers: {
              'x-auth-token': token,
              'Content-Type': 'multipart/form-data'
            }
          })
            .then(_ => {
              navigate('/courses')
            })
            .catch(e => {
              console.log(e)
            })
        }

        navigate('/courses')
      })
      .catch(e => console.log(e))
  }

  getMyCourses = () => {
    const id = localStorage.getItem('userId')
    const token = localStorage.getItem('token')
    this.isLoading = true

    Axios.get(`${COURSE_ENDPOINT}/${id}/courses`, { headers: { 'x-auth-token': token } })
      .then(res => {
        this.isLoading = true
        this.courses = res.data.courses
      })
      .catch(e => {
        this.errorLoading = true
        console.log(e)
      })
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
  errorLoading: observable,

  //actions
  getMyCourses: action,
  getMyCourse: action,
  createCourse: action,
  fetchCourses: action
})

const store = new DecoratedCourseStore()

export default store
