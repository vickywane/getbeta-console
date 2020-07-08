import React, { useState } from "react"
import { Input, Button, Title, Text, Label } from "../../../styles/style"
import Fields from "../fields"

const ResetField = props => {
  const [ResetEmail, setResetEmail] = useState("")
  const onChange = (value, label) => {
    setResetEmail(value)
  }

  return (
    <div>
      <br />
      <Text
        small
        center
        style={{
          padding: "0rem 1rem",
          width: "30rem",
          justifyContent: "center",
        }}
      >
        A <b> Tempoary Reset Link </b> would be sent to your email address used
        in creating your Oasis Account.
      </Text>
      <br />

      <Fields
        textarea={false}
        id={1}
        name="Reset Email Address "
        type="email"
        placeholder="Account Email Address"
        value={ResetEmail}
        onChange={e => onChange(e, "Reset Email Address")}
      />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          long
          onClick={() => {
            console.log("ss")
          }}
        >
          Reset Password{" "}
        </Button>
      </div>
      <br />
    </div>
  )
}

export default ResetField
