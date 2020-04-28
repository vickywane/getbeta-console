import React from "react"

import { Header, Footer } from "../../components/"

import Team from "./team.form"
import TaskForm from "./task.form"

// Trying to make forms reusable
// This seems not to work since i would use react-router
// This might work if i render forms within modals.. I DUNNO !
const Forms = (props): JSX.Element => {
  const Form = props => {
    const { type } = props
    console.log(type, "form type")
    switch (type) {
      case "Team":
        return <Team />
      case "Task":
        return <TaskForm />

      default:
        return <p> List of forms. A form has not been matched </p>
    }
  }

  return (
    <div>
      <Form type={props.type} />
    </div>
  )
}

export default Forms
