import React from "react";
import styled from "styled-components";
import { inject, observer } from "mobx-react";

import { Header, Footer } from "../../components/";
import Upload from "./upload";

const Overview = (props): JSX.Element => {
  const { items } = props.MediaStore;
  const ItemsNo = items.length;
  return (
    <div>
      <Header /> <p> upload overview </p> <p> {ItemsNo} items in store </p>
      <Upload />
      <Footer />
    </div>
  );
};
export default inject("MediaStore")(observer(Overview));
