import React from "react";
import styled from "styled-components";

const Body = styled.div`
  padding: 0.5em;
`;

const Text = styled.p`
  font-size: 1.2em;
`;
const Circle = styled.div``;
const Create = () => {
  return (
    <Body>
      <Circle>
        {" "}
        <Text> Organize Event</Text>{" "}
      </Circle>
      <Circle>
        {" "}
        <Text> Volunteer for an Event </Text>{" "}
      </Circle>
    </Body>
  );
};

export default Create;
