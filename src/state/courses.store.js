import Axios from 'axios'
import { action, observable, decorate } from 'mobx'
import { navigate } from '@reach/router'

const COURSE_ENDPOINT = `${process.env.API_URL}/api/course`

class CourseStore {
  courses = []

  fetchCourse = id => {}

  createCourse = state => {}
}

const DecoratedCourseStore = decorate(CourseStore, {
  //observables
  courses: observable,

  //actions
  fetchCourse: action,
  createCourse: action
})

const store = new DecoratedCourseStore()

export default store
