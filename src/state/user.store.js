import Axios from 'axios'
import { action, observable, decorate } from 'mobx'
import { navigate } from '@reach/router'

const AUTH_ENDPOINT = `${process.env.REACT_APP_API_URL}/users`

class UserStore {
  isAuthenticated = true

  userDetail = {
    name: '',
    email: ''
  }

  logOut = () => {
    localStorage.clear()

    navigate('/login')
  }

  authUser = (email, password) => {
    Axios.post(`${AUTH_ENDPOINT}/login`, {
      data: {
        email: email,
        password: password
      }
    })
      .then(res => {
        const { user, token } = res.data

        // TODO: persist this data
        this.userDetail = {
          name: user.username,
          email: user.email
        }

        navigate('console/*')
      })
      .catch(e => console.log(e))
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
        localStorage.setItem('userId', res.data._id)
        navigate('console/*')
      })
      .catch(e => console.log(e))
  }
}

const DecoratedUserStore = decorate(UserStore, {
  //observables
  isAuthenticated: observable,
  userDetail: observable,

  //actions
  authUser: action,
  createAccount: action,
  logOut: action
})

const store = new DecoratedUserStore()

export default store
