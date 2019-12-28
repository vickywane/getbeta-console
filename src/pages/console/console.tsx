import React from "react";
import styled from "styled-components";

import { Header, Footer } from "../../components/";

const Body = styled.div`
  padding: 1em;
`;

const Console = (): JSX.Element => {
  return (
    <div>
      {" "}
      <Header />
      <Body>
        <p> Console here </p>{" "}
      </Body>
      <Footer />
    </div>
  );
};

export default Console;
