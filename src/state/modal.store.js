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

  // people modal
  showPeople = false
  invite = false
  search = false

  openPeople = () => {
    this.showPeople = true
  }

  closePeople = () => {
    this.showPeople = false
  }

  beginInvite = () => {
    this.invite = true
  }

  beginSearch = () => {
    this.search = true
  }

  stopSearch = () => {
    this.search = false
  }

  //contact modal
  showContactModal = false

  openContactModal = () => {
    this.showContactModal = true
  }

  closeContactModal = () => {
    this.showContactModal = false
  }

  // Teams Modal
  showTeamModal = false

  openTeamModal = () => {
    this.showTeamModal = true
  }

  closeTeamModal = () => {
    this.showTeamModal = false
  }

  // welcome modal
  showWelcomeModal = false

  closeWelcomeModal = () => {
    this.showWelcomeModal = false
  }

  showCreateTrack = false

  openCreateTrack = () => {
    this.showCreateTrack = true
  }

  closeCreateTrack = () => {
    this.showCreateTrack = false
  }

  VolunteerModal = false
  EventId = null
  openVolunteerModal = id => {
    this.EventId = id
    this.VolunteerModal = true
  }

  closeVolunteerModal = () => {
    this.VolunteerModal = false
  }
}

const DecoratedModalStore = decorate(ModalStore, {
  //observables

  // checklist ------------>
  showChecklist: observable,

  // people ======>
  showPeople: observable,
  invite: observable,
  search: observable,

  //actions
  // checklist ------------>
  openChecklist: action,
  closeChecklist: action,

  openPeople: action,
  closePeople: action,
  beginInvite: action,
  beginSearch: action,
  stopSearch: action,

  // contact
  showContactModal: observable,

  openContactModal: action,
  closeContactModal: action,

  // Teams
  showTeamModal: observable,

  openTeamModal: action,
  closeTeamModal: action,

  showWelcomeModal: observable,
  closeWelcomeModal: action,

  showCreateTrack: observable,
  closeCreateTrack: action,
  openCreateTrack: action,

  EventId: observable,
  VolunteerModal: observable,
  openVolunteerModal: action,
  closeVolunteerModal: action,
})

const store = new DecoratedModalStore()

export default store
