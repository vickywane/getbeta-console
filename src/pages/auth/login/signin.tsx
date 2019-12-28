import React from "react";
import styled from "styled-components";
import { Card } from "react-bootstrap";
import Flex from "styled-flex-component";
import { FiTwitter } from "react-icons/fi";
import { IoLogoGoogle } from "react-icons/io";
import media from "styled-media-query";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";

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

const Hover = styled.div({
  cursor: "pointer"
});

const Buttons = styled.button`
  background: #361f94;
  border: 1px solid #0e2f5a;
  border-radius: 5px;
  color: #fff;
  margin: 0 1em;
  padding: 1em 2.5em;
  :hover {
    cursor: pointer;
  }
  ${media.lessThan("medium")`
      padding: 0.70em 1em;
      margin: 0 0.50em;
      border-radius: 5px;
    `};
`;

const Signin = (props): JSX.Element => {
  const { AuthUser, authenticated } = props.AuthStore;
  console.log(authenticated);
  return (
    <Body>
      <Flex justifyCenter>
        <Card style={{ padding: "1em" }}>
          <Title> Login </Title>
          <hr />
          <Input type="email" placeholder="Email Address" /> <br />
          <Input type="password" placeholder="password" /> <br />
          <Flex justifyCenter>
            {" "}
            <Link to="/console">
              <Buttons
                onClick={() => {
                  AuthUser();
                }}
              >
                {" "}
                Login{" "}
              </Buttons>{" "}
            </Link>
          </Flex>
          <div>
            <hr />
            <p style={{ textAlign: "center" }}> Login with </p>

            <Flex justifyAround>
              <Hover>
                {" "}
                <FiTwitter style={{ fontSize: "2em" }} />{" "}
              </Hover>
              <Hover>
                {" "}
                <IoLogoGoogle style={{ fontSize: "2em" }} />{" "}
              </Hover>
              <Hover>
                {" "}
                <IoLogoGoogle style={{ fontSize: "2em" }} />{" "}
              </Hover>
            </Flex>
          </div>
        </Card>
      </Flex>
    </Body>
  );
};

export default inject("AuthStore")(observer(Signin));
