import React from "react";
import styled from "styled-components";
import Flex from "styled-flex-component";

import { Header, Footer } from "../components/";

const Body = styled.div`
  padding: 1em;
`;

const Documentation = (): JSX.Element => {
  return (
    <div>
      <Header />
      <Body>
        <p> documentation </p>
      </Body>

      <Footer />
    </div>
  );
};

export default Documentation;
