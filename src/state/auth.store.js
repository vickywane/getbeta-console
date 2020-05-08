import { action, observable, decorate } from "mobx"

class AuthStore {
  authenticated = true

  AuthUser = details => {
    const { id, name } = details

    localStorage.setItem("user_id", id)
    localStorage.setItem("user_name", name)

    this.authenticated = true
  }

  LogOut = () => {
    localStorage.clear()

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
  LogOut: action,
  setEvent: action,
  setVolunter: action,
})

const store = new DecoratedAuthStore()

export default store
