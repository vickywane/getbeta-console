import React from "react";
import styled from "styled-components";
import Flex from "styled-flex-component";
import { FiUser, FiUsers } from "react-icons/fi";
import { Link } from "react-router-dom";

import useWindowWidth from "../../hook_style";

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
height : 17vh
width : 11em
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
  const hooks = useWindowWidth();
  return (
    <div>
      {hooks >= 700 ? (
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
      ) : (
        <Flex justifyBetween>
          <Link to="/create">
            <Circle>
              <Flex justifyCenter>
                <FiUsers style={{ textAlign: "center", fontSize: "2em" }} />
              </Flex>
              <Text> Organize Event</Text>{" "}
            </Circle>
          </Link>

          <div style={{ padding: "1em" }}>
            <p style={{ color: "grey" }}> OR </p>
          </div>

          <Link to="/list">
            <Circle>
              <Flex justifyCenter>
                <FiUser style={{ textAlign: "center", fontSize: "2em" }} />
              </Flex>
              <Text> Volunteer </Text>{" "}
            </Circle>
          </Link>
        </Flex>
      )}
    </div>
  );
};

export default Create;
