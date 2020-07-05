import { action, observable, decorate } from "mobx"
import { hydrate, persist } from "mobx-persist"

class ModalStore {
  //move this into a seperate store
  EventId = null
  EventType = null


  setEventId = (id, type) => {
    this.EventId = id
    this.EventType = type
  }
  // =================================>

  showInvitationInstruction = false

  openInvitationInstruction = () => {
    this.showInvitationInstruction = true
  }

  closeInvitationInstruction = () => {
    this.showInvitationInstruction = false
}

  showTaskDetail = false

  openTaskDetail = () => {
    this.showTaskDetail = true
  }

  closeTaskDetail = () => {
    this.showTaskDetail = false
  }

  //
  showTeamInstruction = false

  openTeamInstruction = () => {
    this.showTeamInstruction = true
  }

  closeTeamInstruction = () => {
    this.showTeamInstruction = false
  }

  welcomeEventModal = false

  showWelcomeEventModal = () => {
    this.welcomeEventModal = true
  }

  closeWelcomeEventModal = () => {
    this.welcomeEventModal = false
  }

  showPapersModal = false

  // WelcomeMeetupGroupsModal

  WelcomeMeetupGroupsModal = false

  showWelcomeMeetupGroupsModal = () => {
    this.WelcomeMeetupGroupsModal = true
  }

  closeWelcomeMeetupGroupsModal = () => {
    this.WelcomeMeetupGroupsModal = false
  }

  // =>
  openPapersModal = () => {
    this.showPapersModal = true
  }

  closePapersModal = () => {
    this.showPapersModal = false
  }

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
  showWelcomeModal = true

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

  // bug / crash reporter
  showCrashReporter = true
  openCrashReporter = () => {
    this.showCrashReporter = true
  }

  closeCrashReporter = () => {
    this.showCrashReporter = false
  }

  cartItemModal = false
  openCartItemModal = () => {
    this.cartItemModal = true
  }

  closeCartItemModal = () => {
    this.cartItemModal = false
  }

  editEventModal = false

  openEditModal = () => {
    this.editEventModal = true
  }

  closeEditModal = () => {
    this.editEventModal = false
  }

  accessModal = false

  openAccessModal = () => {
    this.accessModal = true
  }

  closeAccessModal = () => {
    this.accessModal = false
  }

  createTaskModal = false
  openCreateTaskModal = () => {
    this.createTaskModal = true
  }

  closeCreateTaskModal = () => {
    this.createTaskModal = false
  }

  editProfile = false

  showEditProfile = () => {
    this.editProfile = true
  }

  closeEditProfile = () => {
    this.editProfile = false
  }
}

const DecoratedModalStore = decorate(ModalStore, {
  showInvitationInstruction: observable,
  closeInvitationInstruction: observable,
  openInvitationInstruction: observable,

  showTaskDetail: observable,
  closeTaskDetail: action,
  openTaskDetail: action,

  //observables
  showTeamInstruction: observable,
  closeTeamInstruction: action,
  openTeamInstruction: action,

  WelcomeMeetupGroupsModal: observable,
  closeWelcomeMeetupGroupsModal: action,
  showWelcomeMeetupGroupsModal: action,

  welcomeEventModal: observable,
  closeWelcomeEventModal: action,
  openWelcomeEventModal: action,

  EventId: observable,
  setEventId: action,

  showPapersModal: observable,
  closePapersModal: action,
  openPapersModal: action,

  editProfile: observable,
  showEditProfile: action,
  closeEditProfile: action,

  createTaskModal: observable,
  openCreateTaskModal: action,
  closeCreateTaskModal: action,

  accessModal: observable,
  openAccessModal: action,
  closeAccessModal: action,

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

  showCrashReporter: observable,
  openCrashReporter: action,
  closeCrashReporter: action,

  cartItemModal: observable,
  openCartItemModal: action,
  closeCartItemModal: action,

  editEventModal: observable,
  openEditModal: action,
  closeEditModal: action,
})

export const store =  new DecoratedModalStore()
// hydrate("modal-nstore", store)
  // .then(() => console.log("hydrated"))
  // .catch(e => console.log(e))

// export default store
