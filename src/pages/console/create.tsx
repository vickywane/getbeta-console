import React from "react";
import styled from "styled-components";
import Flex from "styled-flex-component";
import { FiUser, FiUsers } from "react-icons/fi";

const Body = styled.div`
  padding: 0.5em;
`;

const Text = styled.p`
  font-size: 1.05em;
  text-align: center;
`;

const Circle = styled.div`
 padding : 1em
 border-radius : 110px
height : 23vh
width : 10.5em
background : #0e2f5a
color :  #fff
margin : 2em
&:hover {
cursor : pointer
box-shadow : 0px 7px 7px grey 
background-color : transparent
color : #0e2f5a
}
`;

const Create = () => {
  return (
    <Flex justifyCenter>
      {" "}
      <Body>
        <Circle>
          <Flex justifyCenter>
            <FiUsers style={{ textAlign: "center", fontSize: "2em" }} />
          </Flex>
          <Text> Organize Event</Text>{" "}
        </Circle>
        <Circle>
          <Flex justifyCenter>
            <FiUser style={{ textAlign: "center", fontSize: "2em" }} />
          </Flex>
          <Text> Volunteer </Text>{" "}
        </Circle>
      </Body>{" "}
    </Flex>
  );
};

export default Create;
