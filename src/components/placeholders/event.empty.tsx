import React from "react"
import { Body, UploadContainer, Text, Title } from "../../styles/style"

const Event = () => {
  return (
    <Body>
      <UploadContainer>
        <br />
        <Text style={{ color: "grey" }} center>
          You have not organized any Event{" "}
        </Text>
        <br />
        <Text style={{ color: "grey" }} center>
          Use the <b> Create Event </b> button to create your first event
        </Text>
        <br />
        <Text style={{ color: "grey" }} center>
          <a href="https://my-event.netlify.com" target="_blank">
            Learn More
          </a>{" "}
          about organizing events on Oasis.
        </Text>
      </UploadContainer>
    </Body>
  )
}

export default Event
