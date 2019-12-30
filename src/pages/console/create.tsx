import React from "react";
import styled from "styled-components";
import Flex from "styled-flex-component";
import { FiUser, FiUsers } from "react-icons/fi";
import { Link } from "react-router-dom";

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
padding-top : 10px
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
        <Link to="/create">
          <Circle>
            <Flex justifyCenter>
              <FiUsers style={{ textAlign: "center", fontSize: "2em" }} />
            </Flex>
            <Text> Organize Event</Text>{" "}
          </Circle>
        </Link>

        <Link to="/list">
          <Circle>
            <Flex justifyCenter>
              <FiUser style={{ textAlign: "center", fontSize: "2em" }} />
            </Flex>
            <Text> Volunteer </Text>{" "}
          </Circle>
        </Link>
      </Body>{" "}
    </Flex>
  );
};

export default Create;
