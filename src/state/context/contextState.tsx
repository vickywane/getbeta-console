import * as React from "react"

const UserContext = React.createContext({
  id: "",
  name: "",
})

const TabState = {
  id: 1,
  activeTab: "tracks",
  active: true,
}

const TabContext = React.createContext(TabState)

export { UserContext, TabContext, TabState }
