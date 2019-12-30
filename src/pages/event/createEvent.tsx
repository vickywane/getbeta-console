import React from "react";
import styled from "styled-components";
import Flex from "styled-flex-component";

import { Header, Footer } from "../../components/";

const Body = styled.div`0.5em`;
const CreateEvent = () => {
  return (
    <div>
      <Header />

      <Body>
        <p> create event </p>
      </Body>

      <Footer />
    </div>
  );
};

export default CreateEvent;
