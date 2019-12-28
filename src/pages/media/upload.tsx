import React from "react";
import styled from "styled-components";
import { inject, observer } from "mobx-react";
import { FiUploadCloud } from "react-icons/fi";
import Flex from "styled-flex-component";

const Body = styled.div`
  padding: 0.5em;
`;

const UploadBtn = styled.button`
  background: #1a1c28;
  text-align: right;
  border-radius: 30px;
  height: 40px;
  color: #fff;
  margin: 0 1em;
  padding: 0.25em 2em;
  font-size: 1em;
  &:hover {
    color: #0e2f5a;
    background: #fff;
  }
`;

const Upload = (props): JSX.Element => {
  const { Empty } = props.MediaStore;

  return (
    <Body>
      {Empty ? (
        <div style={{ textAlign: "center", paddingTop: "30px" }}>
          <p>Your storage is currently empty.</p>

          <Flex justifyCenter>
            <p> Use the </p>
            <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
              <FiUploadCloud style={{ fontSize: "1.5em" }} />
            </div>
            <p> button to upload files into your storage . </p>
          </Flex>

          <p> You can drag 'n' drop files to upload </p>

          <Flex justifyCenter>
            <UploadBtn
              style={{ boxShadow: "0px 2px 5px grey", textAlign: "center" }}
              onClick={() => {}}
            >
              <FiUploadCloud style={{ fontSize: "1.5em" }} />
            </UploadBtn>
          </Flex>
        </div>
      ) : (
        <div>
          <p> Not Empty</p>
        </div>
      )}
    </Body>
  );
};

export default inject("MediaStore")(observer(Upload));
