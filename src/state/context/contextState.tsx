import * as React from 'react'

const UserContext = React.createContext({
  id: '',
  name: ''
})

const TabState = {
  id: 1,
  showEventDetails: true,
  activeTab: 'detail',
  active: true
}

const PeopleTabState = {
  id: 1,
  activeTab: 'attendees',
  active: true
}

const AdminTabState = {
  id: 1,
  activeTab: 'stats',
  active: false,
  showTimeline: true
}

const PeopleTabContext = React.createContext(PeopleTabState)
const TabContext = React.createContext(TabState)
const AdminContext = React.createContext(AdminTabState)

export {
  PeopleTabContext,
  AdminTabState,
  AdminContext,
  PeopleTabState,
  UserContext,
  TabContext,
  TabState
}
