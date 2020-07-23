import { action, observable, decorate } from 'mobx'

class ConsoleStore {
  ProfilePane = false

  //user store
  showNotes = true

  openNotes = () => {
    this.showNotes = !this.showNotes
  }

  closeNotes = () => {
    this.showNotes = false
  }

  showProfilePane = () => {
    this.ProfilePane = true
  }

  closeProfilePane = () => {
    this.ProfilePane = false
  }
}

const DecoratedConsoleStore = decorate(ConsoleStore, {
  //observables
  ProfilePane: observable,
  showNotes: observable,

  //actions
  openNotes: action,
  closeNotes: action,
  showProfilePane: action,
  closeProfilePane: action
})

const store = new DecoratedConsoleStore()

export default store
