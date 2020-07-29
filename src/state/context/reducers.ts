export const TabReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'SWITCH_DETAIL':
      return { ...state, active: true, activeTab: 'detail' }
    case 'SHOW_EVENT_PANE':
      return { ...state, showEventDetails: true }
    case 'CLOSE_EVENT_PANE':
      return { ...state, showEventDetails: false }
    case 'SWITCH_TRACKS':
      return { ...state, active: true, activeTab: 'tracks' }
    case 'SWITCH_PEOPLE':
      return { ...state, active: true, activeTab: 'people' }
    case 'SWITCH_SHOP':
      return { ...state, active: true, activeTab: 'shop' }
    case 'SWITCH_GALLERY':
      return { ...state, active: true }
    case 'SWITCH_STATS':
      return { ...state, active: true, activeTab: 'stats' }
    default:
      break
  }
}

export const PeopleTabReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'SWITCH_ATTENDEES':
      return { ...state, active: true, activeTab: 'attendees' }
    case 'SWITCH_VOLUNTEERS':
      return { ...state, active: true, activeTab: 'volunteers' }
    case 'SWITCH_TEAM':
      return { ...state, active: true, activeTab: 'team mates' }
    default:
      break
  }
}

export const AdminTabReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'OPEN_TIMELINE':
      return { ...state, showTimeline: true }
    case 'CLOSE_TIMELINE':
      return { ...state, showTimeline: false }
    case 'SWITCH_DASHBOARD':
      return { ...state, active: true, activeTab: 'dashboard' }
    case 'SWITCH_EDIT':
      return { ...state, active: true, activeTab: 'edit' }
    case 'SWITCH_TEAM':
      return { ...state, active: true, activeTab: 'team' }
    case 'SWITCH_EVENT_SETTINGS':
      return { ...state, active: true, activeTab: 'event-settings' }
    case 'SWITCH_BUG':
      return { ...state, active: true }
    case 'SWITCH_INVITATION':
      return { ...state, active: true, activeTab: 'invitation' }
    case 'SWITCH_MOBILE':
      return { ...state, active: true, activeTab: 'mobile' }
    case 'SWITCH_SCHEDULE':
      return { ...state, active: true, activeTab: 'schedule' }
    case 'SWITCH_STORE':
      return { ...state, active: true, activeTab: 'store' }
    case 'OPEN_ARCHIVE':
      return { ...state, active: true, activeTab: 'archive' }
    case 'SWITCH_DEVELOPER':
      return { ...state, active: true, activeTab: 'developer' }
    case 'SWITCH_FEEDBACK':
      return { ...state, active: true, activeTab: 'feedback' }
    default:
      break
  }
}

export const StreamReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'SWITCH_ACTIVE_VIEW':
      console.log(action)
      return { ...state, activeView: action.view }
    default:
      break
  }
}
