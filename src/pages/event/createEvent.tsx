import React from "react";
import styled from "styled-components";
import Flex from "styled-flex-component";

import { Header, Footer } from "../../components/";

const Input = styled.input`
width : 25em
height : 5vh
border : 1px solid #000
border-radius : 5px
padding : 0.5em
font-size : 1.1em
paddingLeft : 15px
`;

const Body = styled.div`
  padding: 1em;
`;
const CreateEvent = () => {
  return (
    <div>
      <Header />

      <Body>
        <Flex column>
          <label> Event Name </label>
          <Input placeholder="Event Name" />
        </Flex>
      </Body>
      <Footer />
    </div>
  );
};

export default CreateEvent;
