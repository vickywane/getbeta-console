import { action, observable, decorate } from "mobx"

class ModalStore {
  // checklist modal
  showChecklist = false

  openChecklist = () => {
    this.showChecklist = true
  }

  closeChecklist = () => {
    this.showChecklist = false
  }
}

const DecoratedModalStore = decorate(ModalStore, {
  //observables
  showChecklist: observable,

  //actions
  openChecklist: action,
  closeChecklist: action,
})

const store = new DecoratedModalStore()

export default store
