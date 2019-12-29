import { Link } from "react-router-dom";
import React from "react";
import Img from "react-image";
import styled from "styled-components";
import Flex from "styled-flex-component";
import { FiMenu, FiUser } from "react-icons/fi";
import { inject, observer } from "mobx-react";

import useWindowWidth from "../hook_style";

// ? marks this interface value as not required by other comps
// marking this interface as non-mandatory makes d values undefined --fix later
interface CustomProps {
  screen?: String;
  name?: String;
}

const Header = (props, { screen, name }: CustomProps): JSX.Element => {
  const hooks = useWindowWidth();

  console.log(props.screen, props.name);

  const Hover = styled.div({
    cursor: "pointer"
  });

  const Div = styled.div`
      padding: 0.5em
      background : #444444
    `;

  const A = styled.a`
    color: #0e2f5a;
    text-decoration: none;
    font-size: 1.6em;
    font-family: comic sans ms;
  `;

  const Title = styled.a`
	font-size : 1.2em
	color : white `;

  const Image = styled(Img)`
    width: 7%;
    height: 25px;
  `;

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

  const Apply = styled.button`
    background: #f9db77;
    text-align: right;
    border-radius: 5px;
    height: 35px
    border: 0.3px solid #0e2f5a;
    color: #0e2f5a;
    margin: 0 1em;
    padding: 0.25em 1em;
    font-size: 1em;
    &:hover {
      color: #0e2f5a;
      background: #fff;
    }
  `;

  // react hooks && event listeners
  const NameDiv = styled.div`
    margin-left: 4%;
  `;

  //fix later -- should change name later
  const isAuth = props.AuthStore.authenticated;

  const { showProfilePane, ProfilePane } = props.ConsoleStore;

  return (
    <div>
      <div
        style={{ boxShadow: ProfilePane ? "0px 0px 0px" : "0px 7px 7px grey" }}
      >
        {hooks >= 720 ? (
          <div>
            <Div
              style={{
                paddingTop: "1%"
              }}
            >
              <nav>
                <Flex justifyBetween>
                  <NameDiv>
                    <Link href="/">
                      <A>Event</A>
                    </Link>
                  </NameDiv>

                  {isAuth ? (
                    <Flex>
                      <Button onClick={() => alert("..")}> Logout </Button>
                      <Hover
                        style={{ paddingLeft: "10px", paddingRight: "10px" }}
                        onClick={() => {
                          showProfilePane();
                        }}
                      >
                        <FiUser style={{ color: "#fff", fontSize: "2em" }} />{" "}
                      </Hover>
                    </Flex>
                  ) : (
                    <Flex justifyBetween>
                      <div style={{ paddingRight: "20px" }}>
                        <Link to="/signup">
                          <Title>Create Account </Title>
                        </Link>
                      </div>

                      <Link to="/login">
                        <Apply>Login</Apply>
                      </Link>
                    </Flex>
                  )}
                </Flex>
              </nav>
            </Div>
          </div>
        ) : (
          <div>
            <Div style={{ padding: "0.5em", paddingRight: "1%" }}>
              <nav>
                <Flex justifyBetween>
                  <NameDiv>
                    <Flex>
                      <Image
                        src={
                          "https://res.cloudinary.com/dkfptto8m/image/upload/v1558070244/Mongodb%20hackathon%20project/thunder.png"
                        }
                        alt="Logo"
                      />
                      <Link href="/">
                        <A>Event</A>
                      </Link>
                    </Flex>
                  </NameDiv>

                  {isAuth ? (
                    <Button>
                      <Flex>
                        <FiMenu style={{ fontSize: "1.5em", color: "#fff" }} />
                        <p style={{ paddingLeft: "10px" }}> Menu</p>
                      </Flex>
                    </Button>
                  ) : (
                    <Button>
                      <Flex>
                        <FiMenu style={{ fontSize: "1.5em", color: "#fff" }} />
                        <p style={{ paddingLeft: "10px" }}> Menu</p>
                      </Flex>
                    </Button>
                  )}
                </Flex>
              </nav>
            </Div>
          </div>
        )}
      </div>

      {props.screen === "event" ? (
        <Div style={{ padding: "0.2em", background: "transparent" }}>
          <h3 style={{ color: "#000" }}> {props.name} </h3>
          <hr />
        </Div>
      ) : null}
    </div>
  );
};

export default inject("AuthStore", "ConsoleStore")(observer(Header));
