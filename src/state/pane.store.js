import { action, observable, decorate } from "mobx"

class PaneStore {
  // Most panes should show by default
  Notify = true
  importPane = false

  closeNotify = () => {
    this.Notify = false
  }

  closeImport = () => {
    this.importPane = true
  }
}

const DecoratedPaneStore = decorate(PaneStore, {
  //observables
  Notify: observable,
  importPane: observable,

  closeNotify: action,
  closeImport: action,
})

const store = new DecoratedPaneStore()

export default store
