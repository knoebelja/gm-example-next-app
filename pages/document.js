import React from "react";

import BodyWrapper from "../components/BodyWrapper";
import H1 from "../components/H1";
import H2 from "../components/H2";
import Image from "../components/Image";

const DocumentPage = () => {
  return (
    <BodyWrapper>
      <H1>Custom Document</H1>
      <H2>pages/_document.js</H2>
      <Image src="/static/images/document.png" />
    </BodyWrapper>
  );
};

export default DocumentPage;
