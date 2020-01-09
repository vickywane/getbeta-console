import React from "react";
import styled from "styled-components";
import Flex from "styled-flex-component";
import media from "styled-media-query";

const Footer = () => {
  const Div = {
    backgroundColor: "#5919AB",
    width: " 100%"
  };

  const Title = {
    fontSize: "0.8em",
    color: "#fff"
  };

  const Test = styled.p`
    font-size: 1.2em;
    padding-top: 10px;
    ${media.lessThan("medium")`
      font-size: 1em
  `};
  `;

  return (
    <footer style={Div}>
      <div
        style={{
          marginTop: "1em",
          paddingTop: "0.5em",
          textAlign: "center",
          padding: "0.7%",
          backgroundColor: " #361f94",
          fontSize: "0.8em",
          color: "#fff"
        }}
      >
        <p>
          Copyright © {new Date().getFullYear()} , a subsidiary of the
          <a href="https://www.fundry.netlify.com">Fundry Program </a>.
          <br /> <a href="/"> Terms of Service </a> or
          <a href="/"> Privacy Policies </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
