import React from "react";
import styled from "styled-components";
import { Card } from "react-bootstrap";
import Flex from "styled-flex-component";

const Body = styled.div`
  padding: 1em;
`;

const Title = styled.h2``;

const Login = () => {
  return (
    <Body>
      <Flex justifyCenter>
        <Card style={{ padding: "1em" }}>
          <p> Login here </p>{" "}
        </Card>
      </Flex>
    </Body>
  );
};

export default Login;
