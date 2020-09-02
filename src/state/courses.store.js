import Axios from 'axios'
import { action, observable, decorate } from 'mobx'
import { navigate } from '@reach/router'

const COURSE_ENDPOINT = `${process.env.REACT_APP_API_URL}/courses`
const token = localStorage.getItem('token')

class CourseStore {
  courses = []

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

  createCourse = () => {
    const id = localStorage.getItem('userId')

    Axios.post(`${COURSE_ENDPOINT}/${id}/add`, { data: {} }, { headers: { 'x-auth-token': token } })
      .then(res => console.log(res))
      .catch(e => console.log(e))
  }
}

const DecoratedCourseStore = decorate(CourseStore, {
  //observables
  courses: observable,

  //actions
  fetchCourse: action,
  createCourse: action,
  fetchCourses: action
})

const store = new DecoratedCourseStore()

export default store
