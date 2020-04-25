import { action, observable, decorate } from "mobx"
import axios from "axios"

class AuthStore {
  authenticated = true

  AuthUser = () => {
    //Todo: Move login endpoint to graphql endpoint && use apollo NOT axios
    try {
      axios
        .post("http://localhost:8080/login", {
          username: "admin",
          password: "admin",
        })
        .then(res => {
          const token = res.data.token
          console.log(token)
          localStorage.setItem("token", token)
          this.authenticated = true
        })
    } catch (e) {
      console.log(e)
    }
  }

  UnAuthUser = () => {
    this.authenticated = false
  }

  // App user's state . =====>
  // might be made into a sperate store .
  //mocked values to work with UI
  hasEvent = false
  hasVolunteer = false

  setEvent = () => {
    this.hasEvent = true
  }
  setVolunter = () => {
    this.hasVolunteer = true
  }
}

const DecoratedAuthStore = decorate(AuthStore, {
  //observables
  authenticated: observable,
  hasEvent: observable,
  hasVolunteer: observable,

  //actions
  AuthUser: action,
  UnAuthUser: action,
  setEvent: action,
  setVolunter: action,
})

const store = new DecoratedAuthStore()

export default store
