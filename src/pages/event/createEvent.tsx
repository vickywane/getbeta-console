import React, { useState } from "react";
import styled from "styled-components";
import Flex from "styled-flex-component";

import { Header, Footer } from "../../components/";

const Input = styled.input`
width : 25em
height : 4.5vh
border : 1px solid #000
border-radius : 3px
padding : 0.5em
font-size : 1em
paddingLeft : 15px
`;

const Body = styled.div`
  padding: 1em;
`;

const Description = styled.textarea``;

const CreateEvent = () => {
  const [Name, setName] = useState<string>("");

  console.log(Name);
  return (
    <div>
      <Header screen="event" name="" />

      <Body>
        <Flex column>
          <label
            style={{
              paddingLeft: "5px",
              paddingBottom: "5px",
              fontSize: "1.1em"
            }}
          >
            Event Name{" "}
          </label>
          <Input
            placeholder="Event Name"
            onChangeText={e => {
              setName(e.target.value);
            }}
          />
        </Flex>

        <br />
        <Flex column>
          <label
            style={{
              paddingLeft: "5px",
              paddingBottom: "5px",
              fontSize: "1.1em"
            }}
          >
            Event Description{" "}
          </label>
          <Description
            style={{ height: "6em", width: "35em" }}
            placeholder="Describe your event to your attendees"
          />
        </Flex>
      </Body>
      <Footer />
    </div>
  );
};

export default CreateEvent;
