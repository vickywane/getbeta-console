import Axios from 'axios'
import { action, observable, decorate } from 'mobx'
import { create, persist } from 'mobx-persist'
import { navigate } from '@reach/router'

const AUTH_ENDPOINT = `${process.env.REACT_APP_PRODUCTION_API_URI}/vendors`
const id = localStorage.getItem('userId')
const token = localStorage.getItem('token')

class UserStore {
  @persist @observable isAuthenticated = false
  isLoading = false
  hasLoginError = false
  users = []
  userStats = {
    totalCourses: 0,
    totalContents: 0
  }

  // might remove this
  userDetail = {
    name: '',
    email: ''
  }

  logOut = () => {
    localStorage.clear()

    navigate('/login')
  }

  setLoginError = val => {
    this.hasLoginError = val
  }

  updateUser = (userName, userEmail, Bio, Number, Occupation, Education, userImage) => {
    Axios.put(
      `${AUTH_ENDPOINT}/${id}`,
      {
        fullname: userName,
        bio: Bio,
        cell_no: Number,
        email: userEmail,
        hle: Education,
        occupation: Occupation
      },
      {
        headers: { 'x-auth-token': token }
      }
    )
      .then(res => {
        const { fullname, email, contents, courses } = res.data

        this.userDetail = {
          name: fullname,
          email: email
        }

        if (userImage) {
          const formData = new FormData()
          formData.append('file', userImage)

          Axios.post(`${AUTH_ENDPOINT}/upload`, formData, {
            headers: { 'x-auth-token': token, 'Content-Type': 'mutlipart/formdata' }
          })
            .then(() => console.log('uploaded'))
            .catch(e => console.log(`file upload error : ${e}`))
        }
      })
      .catch(e => console.log(`error updating user : ${e}`))
  }

  //@action
  getUserDetail = () => {
    Axios.get(`${AUTH_ENDPOINT}/${id}`, {
      headers: { 'x-auth-token': token }
    })
      .then(res => {
        const { fullname, email, contents, courses } = res.data.vendor

        this.userStats = {
          totalContents: contents.length,
          totalCourses: courses.length
        }

        this.userDetail = {
          name: fullname,
          email: email
        }
      })
      .catch(e => console.log(e))
  }

  authUser = (email, password) => {
    this.isLoading = true

    Axios.post(`${AUTH_ENDPOINT}/login`, {
      email: email,
      password: password
    })
      .then(res => {
        const { vendor, token } = res.data
        console.log(vendor)
        // i am only storing in localStorage for test purpose
        // would switch later
        localStorage.setItem('token', token)
        localStorage.setItem('userId', vendor.id)

        this.userDetail = {
          name: vendor.fullname,
          email: vendor.email
        }

        this.isLoading = false
        this.isAuthenticated = true
        navigate('console/*')
      })
      .catch(e => {
        this.hasLoginError = !this.hasLoginError
        this.isLoading = false
        console.log(`Error from login : ${e}`)
      })
  }

  createAccount = (fullname, email, password, confirmPassword) => {
    Axios.post(`${AUTH_ENDPOINT}/register`, {
      fullname: fullname,
      email: email,
      password: password,
      passwordCheck: confirmPassword
    })
      .then(res => {
        const { _id, email, fullname } = res.data.savedUser

        localStorage.setItem('token', res.data.token)
        localStorage.setItem('userId', _id)
        this.userDetail = {
          name: fullname,
          email: email
        }
        this.isAuthenticated = true
        navigate('console/*')
        Axios.post(`${process.env.REACT_APP_EMAIL_ENDPOINT}`, {
          email: email,
          type: 'welcome'
        }).catch(e => console.log(`An error occurred from sending welcome-email : ${e}`))
      })
      .catch(e => console.log(e))
  }

  deleteAccount = () => {
    Axios.delete(`${AUTH_ENDPOINT}/${id}`, {
      data: {
        id: localStorage.getItem('userId')
      },
      headers: { 'x-auth-token': localStorage.getItem('token') }
    })
      .then(res => {
        localStorage.clear()

        navigate('/create-account')
      })
      .catch(e => console.log(`Error occured : ${e}`))
  }

  getUsers = () => {
    Axios.get(`${AUTH_ENDPOINT}`)
      .then(res => {
        this.users = res.data.vendors
      })
      .catch(e => console.log())
  }
}

const DecoratedUserStore = decorate(UserStore, {
  //observables
  isLoading: observable,
  errorMessage: observable,
  hasLoginError: observable,
  userDetail: observable,
  users: observable,
  userStats: observable,

  //actions
  setLoginError: action,
  getUserDetail: action,
  authUser: action,
  deleteAccount: action,
  createAccount: action,
  logOut: action,
  updateUser: action,
  getUsers: action
})

export const store = new DecoratedUserStore()

const hydrate = create({
  storage: localStorage,
  jsonify: false
})

hydrate('user-store', store)
  .then(() => {
    console.log('user-store has heen hydrated')
  })
  .catch(e => console.log(`An error coccured while hydrating user-store : ${e}`))
  .catch(e => console.log(`An error coccured while hydrating user-store : ${e}`))
