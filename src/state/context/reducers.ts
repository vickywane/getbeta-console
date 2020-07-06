export const TabReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SWITCH_DETAIL":
      return { ...state, active: true, activeTab: "detail" }
      break
    case "SHOW_EVENT_PANE":
      return { ...state, showEventDetails: true }
      break
    case "CLOSE_EVENT_PANE":
      return { ...state, showEventDetails: false }
      break
    case "SWITCH_TRACKS":
      return { ...state, active: true, activeTab: "tracks" }
      break
    case "SWITCH_PEOPLE":
      return { ...state, active: true, activeTab: "people" }
      break
    case "SWITCH_SHOP":
      return { ...state, active: true, activeTab: "shop" }
      break
    default:
      break
  }
}

export const PeopleTabReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SWITCH_ATTENDEES":
      return { ...state, active: true, activeTab: "attendees" }
      break
    case "SWITCH_VOLUNTEERS":
      return { ...state, active: true, activeTab: "volunteers" }
      break
    case "SWITCH_TEAM":
      return { ...state, active: true, activeTab: "team mates" }
      break
    default:
      break
  }
}

export const AdminTabReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SWITCH_DASHBOARD":
      return { ...state, active: true, activeTab: "dashboard" }
      break
    case "SWITCH_EDIT":
      return { ...state, active: true, activeTab: "edit" }
      break
    case "SWITCH_TEAM":
      return { ...state, active: true, activeTab: "team" }
      break
    case "SWITCH_ACCESS":
      return { ...state, active: true, activeTab: "access" }
      break
    case "SWITCH_BUG":
      return { ...state, active: true }
      break
    case "SWITCH_INVITATION":
      return { ...state, active: true, activeTab: "invitation" }
      break
    case "SWITCH_MOBILE":
      return { ...state, active: true, activeTab: "mobile" }
      break
    case "SWITCH_SCHEDULE":
      return { ...state, active: true, activeTab: "schedule" }
      break
    case "SWITCH_STORE":
      return { ...state, active: true, activeTab: "store" }
      break
    case "OPEN_ARCHIVE":
      return { ...state, active: true, activeTab: "archive" }
      break
    default:
      break
  }
}