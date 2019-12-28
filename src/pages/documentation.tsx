import React from "react";
import styled from "styled-components";
import Flex from "styled-flex-component";

import { Header, Footer } from "../components/";

const Body = styled.div`
  padding: 1em;
`;

const Title = styled.h1`
  text-align: center;
`;
const Text = styled.p``;
const TitleText = styled.p`
  font-size: 1.3em;
`;

const Documentation = (): JSX.Element => {
  return (
    <div>
      <Header />
      <Body>
        <Flex justifyCenter>
          {" "}
          <div>
            {" "}
            <Title> Event Playground </Title>
            <TitleText> Content Management Console for Event </TitleText>
          </div>
        </Flex>
      </Body>

      <Footer />
    </div>
  );
};

export default Documentation;
