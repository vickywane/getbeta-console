import { action, observable, decorate } from 'mobx'

class ConsoleStore {
  showProfilePane = true

  //user store
  showNotes = true

  activeConsoleView = 'organizing'

  setConsoleView = view => {
    this.activeConsoleView = view
  }

  openNotes = () => {
    this.showNotes = !this.showNotes
  }

  closeNotes = () => {
    this.showNotes = false
  }

  toggleProfilePane = () => {
    this.showProfilePane = !this.showProfilePane
  }
}

const DecoratedConsoleStore = decorate(ConsoleStore, {
  //observables
  showProfilePane: observable,
  showNotes: observable,
  activeConsoleView: observable,

  //actions
  openNotes: action,
  setConsoleView: action,
  closeNotes: action,
  toggleProfilePane: action
})

const store = new DecoratedConsoleStore()

export default store
