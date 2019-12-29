import React from "react";
import styled from "styled-components";
import { inject, observer } from "mobx-react";
import Flex from "styled-flex-component";
import { FiX } from "react-icons/fi";
import posed from "react-pose";
import { Link } from "react-router-dom";

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

const Card = styled.div({
  height: "7vh",
  padding: "0.5em",
  paddingTop: "0.2em",
  width: "4em",
  borderRadius: "5px",
  boxShadow: "0px 2px 6px grey",
  background: "black",
  color: "white",
  cursor: "pointer"
});

const Bounce = posed.div({
  hoverable: true,
  init: {
    scale: 1,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)",
    textAlign: "center"
  },
  hover: {
    scale: 1.1
  },
  press: {
    scale: 1.1,
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)"
  }
});

const Console = (props): JSX.Element => {
  const { closeProfilePane, ProfilePane } = props.ConsoleStore;

  const data = [
    { i: 1, name: "a" },
    { i: 2, name: "b" },
    { i: 3, name: "b" },
    { i: 4, name: "c" },
    { i: 5, name: "d" },
    { i: 6, name: "e" }
  ];

  return (
    <div>
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
        <p style={{ textAlign: "center" }}> Console here </p>{" "}
        <Flex justifyAround>
          {data.map(({ i, name }) => {
            return (
              <Bounce>
                <Link to={`/event/${i}`}>
                  <Card key={i}>
                    <div style={{ textAlign: "center" }}>
                      <h5> {name}</h5>
                    </div>
                  </Card>
                </Link>
              </Bounce>
            );
          })}
        </Flex>
      </Body>
      <Footer />
    </div>
  );
};

export default inject("ConsoleStore")(observer(Console));
