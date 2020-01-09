import React, { useState } from "react";
import styled from "styled-components";
import Flex from "styled-flex-component";

import { Header, Footer } from "../../components/";

const Input = styled.input`
width : ${props => (props.description ? "50em" : "35em")}
height : ${props => (props.description ? "20vh" : "4.5vh")}
padding-top : ${props => (props.description ? "0px" : "0px")}
border : 1px solid grey
border-radius : 3px
padding : 0.5em
font-size : 1em
padding-left : 15px
`;

const Body = styled.div`
  padding: 1em;
`;

const Button = styled.button`
  background: #0e2f5a
  text-align: right;
  border-radius: 5px;
  height: 57px;
  border: 1px solid #0e2f5a;
  color: #fff;
  margin: 0 1em;
  padding: 0.5em 5em;
  font-size: 1.3em;
  &:hover {
    color: #0e2f5a;
    background: #fff;
  }
`;

const Text = styled.p`
font-size: 1.1em
 color: ${props => (props.notice ? "grey" : "#000")}
text-align : center
`;

const Section = styled.h2`
padding-left:  10px
  font-weight:  normal
`;

const CreateEvent = () => {
  const [Name, setName] = useState<string>("");

  console.log(Name);
  return (
    <div>
      <Header screen="event" name="" />

      <Body>
        <Section> Details </Section>
        <Flex column>
          <label
            style={{
              paddingLeft: "10px",
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
          <Input
            description
            placeholder="Describe your event to your attendees"
          />
        </Flex>

        <br />
        <Flex column>
          <Section>Images</Section>
        </Flex>
      </Body>

      <Flex justifyCenter>
        {" "}
        <div>
          <Text notice> All data here can be updated at a later time. </Text>

          <Button> Create Event </Button>
        </div>{" "}
      </Flex>

      <Footer />
    </div>
  );
};

export default CreateEvent;
