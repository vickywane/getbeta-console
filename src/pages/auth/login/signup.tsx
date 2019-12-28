import React from "react";
import styled from "styled-components";
import { Card } from "react-bootstrap";
import Flex from "styled-flex-component";
import { FiTwitter } from "react-icons/fi";
import { IoLogoGoogle } from "react-icons/io";
import media from "styled-media-query";

const Body = styled.div`
  padding: 1em;
`;

const Title = styled.h2`
  text-align: center;
`;

const Input = styled.input({
  paddingLeft: "15px",
  padding: "0.5em",
  border: "1px solid #000",
  borderRadius: "3px",
  width: "28em",
  height: "5vh",
  margin: "1em"
});

const Buttons = styled.button`
  background: #361f94;
  border: 1px solid #0e2f5a;
  border-radius: 5px;
  color: #fff;
  margin: 0 1em;
  padding: 1em 2em;
  :hover {
    font-size: 1em;
  }
  ${media.lessThan("medium")`
      padding: 0.70em 1em;
      margin: 0 0.50em;
      border-radius: 5px;
    `};
`;

const Login = (): JSX.Element => {
  return (
    <Body>
      <Flex justifyCenter>
        <Card style={{ padding: "1em" }}>
          <Title> Create Account </Title>
          <hr />
          <Input type="text" placeholder="Name" /> <br />
          <Input type="email" placeholder="Email Address" /> <br />
          <Input type="password" placeholder="password" /> <br />
          <Flex justifyCenter>
            {" "}
            <Buttons> Create Account </Buttons>{" "}
          </Flex>
          <div>
            <hr />
            <p style={{ textAlign: "center" }}> Create an account with </p>

            <Flex justifyAround>
              <FiTwitter style={{ fontSize: "2em" }} />
              <IoLogoGoogle style={{ fontSize: "2em" }} />
              <IoLogoGoogle style={{ fontSize: "2em" }} />
            </Flex>
          </div>
        </Card>
      </Flex>
    </Body>
  );
};

export default Login;
