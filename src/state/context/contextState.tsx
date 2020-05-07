import * as React from "react"

const UserContext = React.createContext({
  id: "",
  name: "",
})

const TabContext = React.createContext({
  id: 1,
  activeTab: "detail",
  active: true,
})

export { UserContext, TabContext }
