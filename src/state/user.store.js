import { action, observable, decorate } from 'mobx'
import { navigate } from '@reach/router'

class UserStore {
  isAuthenticated = false

  authUser = state => {
    this.isAuthenticated = state
    navigate('console/*')
  }
}

const DecoratedUserStore = decorate(UserStore, {
  //observables
  isAuthenticated: observable,

  //actions
  authUser: action
})

const store = new DecoratedUserStore()

export default store
