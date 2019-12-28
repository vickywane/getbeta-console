import { Link } from "react-router-dom";
import React from "react";
import Img from "react-image";
import styled from "styled-components";
import Flex from "styled-flex-component";
import { FiMenu } from "react-icons/fi";

import useWindowWidth from "../hook_style";

const Header = props => {
  const hooks = useWindowWidth();

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
	color  : white
`;

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

  //fix later -- should come from store auth flow
  const isAuth = false;

  return (
    <div>
      {props.screens === "Eng" ? (
        <div style={{ boxShadow: "0px 7px 7px grey" }}>
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
                        <Button onClick={alert("..")}> Logout </Button>
                      </Flex>
                    ) : (
                      <Flex justifyBetween>
                        <div>
                          <Flex>
                            <div style={{ paddingRight: "30px" }}>
                              <Link to="/team">
                                <Title> Team </Title>
                              </Link>
                            </div>
                          </Flex>
                        </div>

                        <Link to="/login">
                          <Apply onClick={alert("..")}>
                            {" "}
                            Start Application{" "}
                          </Apply>
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
                        />
                        <Link href="/">
                          <A style={{ fontSize: "1.4em" }}>Event</A>
                        </Link>
                      </Flex>
                    </NameDiv>

                    {isAuth ? (
                      <Button>
                        <Flex>
                          <FiMenu
                            style={{ fontSize: "1.5em", color: "#fff" }}
                          />
                          <p style={{ paddingLeft: "10px" }}> Menu</p>
                        </Flex>
                      </Button>
                    ) : (
                      <Button>
                        <Flex>
                          <FiMenu
                            style={{ fontSize: "1.5em", color: "#fff" }}
                          />
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
      ) : (
        <div style={{ boxShadow: "0px 7px 7px grey" }}>
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
                        <Button onClick={alert("..")}> Logout </Button>
                      </Flex>
                    ) : (
                      <Flex justifyBetween>
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
                          <FiMenu
                            style={{ fontSize: "1.5em", color: "#fff" }}
                          />
                          <p style={{ paddingLeft: "10px" }}> Menu</p>
                        </Flex>
                      </Button>
                    ) : (
                      <Button>
                        <Flex>
                          <FiMenu
                            style={{ fontSize: "1.5em", color: "#fff" }}
                          />
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
      )}
    </div>
  );
};

export default Header;
