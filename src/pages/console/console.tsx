import React from "react";
import styled from "styled-components";
import { inject, observer } from "mobx-react";
import Flex from "styled-flex-component";
import { FiX } from "react-icons/fi";

import { Header, Footer } from "../../components/";

const Body = styled.div`
  padding: 1em;
`;

const Pane = styled.div`
  padding: 0.5em;
`;

const Hover = styled.div({ cursor: "pointer" });

const Button = styled.button`
    background: #0e2f5a
    text-align: right;
    border-radius: 5px;
    height: 40px;
    border: 1px solid #0e2f5a;
    color: #fff;
    margin: 0 1em;
    padding: 0.50em 1.5em;
    font-size: 1em;
    &:hover {
      color: #0e2f5a;
      background: #fff;
    }
  `;

const Console = (props): JSX.Element => {
  const { closeProfilePane, ProfilePane } = props.ConsoleStore;

  return (
    <div>
      {" "}
      <Header />
      {ProfilePane ? (
        <div>
          <Pane style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>
            <Flex justifyBetween>
              <Flex column>
                <h3> Victory Nwani </h3>
              </Flex>

              <Flex>
                <Button> Logout </Button>

                <Hover
                  onClick={() => {
                    closeProfilePane();
                  }}
                  style={{ paddingLeft: "10px", paddingRight: "10px" }}
                >
                  <FiX style={{ fontSize: "1.5em", color: "#000" }} />
                </Hover>
              </Flex>
            </Flex>
          </Pane>
        </div>
      ) : null}
      <Body>
        <p> Console here </p>{" "}
      </Body>
      <Footer />
    </div>
  );
};

export default inject("ConsoleStore")(observer(Console));
