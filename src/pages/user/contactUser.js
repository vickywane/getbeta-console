import React from 'react'
import { observer } from 'mobx-react'

const ContactUser = props => {
  const {} = props.UserStore

  return (
    <div>
      <p> Contact user </p>
    </div>
  )
}

export default observer(ContactUser)
