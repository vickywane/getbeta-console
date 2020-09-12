import Axios from 'axios'
import { action, observable, decorate, computed } from 'mobx'
import { create, persist } from 'mobx-persist'
import { navigate } from '@reach/router'

const AUTH_ENDPOINT = `${process.env.REACT_APP_API_URL}/users`

class UserStore {
  @persist @observable isAuthenticated = true
  isLoading = false
  hasLoginError = false

  @persist @observable userDetail = {
    name: '',
    email: ''
  }

  logOut = () => {
    localStorage.clear()

    navigate('/login')
  }

  authUser = (email, password) => {
    this.isLoading = true

    Axios.post(`${AUTH_ENDPOINT}/login`, {
      data: {
        email: email,
        password: password
      }
    })
      .then(res => {
        const { user, token } = res.data

        // i am only storing in localStorage for test purpose
        // would switch later
        localStorage.setItem('token', token)
        localStorage.setItem('userId', user.id)

        this.userDetail = {
          name: user.username,
          email: user.email
        }

        this.isLoading = false
        this.isAuthenticated = true
        navigate('console/*')
      })
      .catch(e => {
        this.hasLoginError = !this.hasLoginError
        console.log(`Error from login : ${e}`)
      })
  }

  createAccount = (username, email, password, confirmPassword) => {
    Axios.post(`${AUTH_ENDPOINT}/register`, {
      method: 'POST',
      data: {
        username: username,
        email: email,
        password: password,
        passwordCheck: confirmPassword
      }
    })
      .then(res => {
        const { _id, email, username, token } = res.data
        console.log(token, res.data)
        localStorage.setItem('token', token)
        localStorage.setItem('userId', _id)
        this.userDetail = {
          name: username,
          email: email
        }
        navigate('console/*')
      })
      .catch(e => console.log(e))
  }

  deleteAccount = () => {
    Axios.delete(`${AUTH_ENDPOINT}/delete`, {
      method: 'POST',
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

  getUserCourses = () => {
    Axios.get(``)
      .then(() => {})
      .catch(e => console.log())
  }

  getUserBookings = () => {
    Axios.get(``)
      .then(() => {})
      .catch(e => console.log())
  }

  getUserContents = () => {
    Axios.get(``)
      .then(() => {})
      .catch(e => console.log())
  }
}

const DecoratedUserStore = decorate(UserStore, {
  //observables
  isLoading: observable,
  errorMessage: observable,
  hasLoginError: observable,

  //actions
  authUser: action,
  deleteAccount: action,
  createAccount: action,
  logOut: action,

  getUserBooking: action,
  getUserContents: action,
  getUserCourses: action
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
