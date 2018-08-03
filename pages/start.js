import React from "react";

import BodyWrapper from "../components/BodyWrapper";
import H1 from "../components/H1";
import H2 from "../components/H2";
import Image from "../components/Image";
import BoxWrapper from "../components/BoxWrapper";

const StartPage = () => {
  return (
    <BodyWrapper>
      <H1>Getting Started</H1>
      <H2>gm-example-next-app</H2>
      <BoxWrapper>
        <Image src="/static/images/install.png" />
        <Image src="/static/images/structure.png" />
      </BoxWrapper>
    </BodyWrapper>
  );
};

export default StartPage;
