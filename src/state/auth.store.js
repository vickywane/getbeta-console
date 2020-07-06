import { action, observable, decorate } from "mobx"
import { create, persist } from "mobx-persist"

class AuthStore {
  @persist @observable authenticated = false

  authState = "Login"

  AuthUser = details => {
    this.authenticated = true
    const { id, name } = details

    localStorage.setItem("user_id", id)
    localStorage.setItem("user_name", name)
  }

  Login = () => {
    console.log(this.authenticated)
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

  setAuthState = state => {
    this.authState = state
  }
}

const DecoratedAuthStore = decorate(AuthStore, {
  //observables
  // authenticated: observable,
  hasEvent: observable,
  hasVolunteer: observable,
  authState: observable,

  //actions
  Login: action,
  AuthUser: action,
  LogOut: action,
  setEvent: action,
  getAuthState: action,
  setVolunter: action,
  setAuthState: action,
})

export const store = new DecoratedAuthStore()

const hydrate = create({
  storage: localStorage,
  jsonify: true,
})

hydrate("auth-store", store)
  .then(() => console.log("auth-store has been hydrated"))
  .catch(e => console.log(e))

// export default store
