import React from "react";

import BodyWrapper from "../components/BodyWrapper";
import H1 from "../components/H1";
import H2 from "../components/H2";
import Image from "../components/Image";

const AppPage = () => {
  return (
    <BodyWrapper>
      <H1>Custom App</H1>
      <H2>pages/_app.js</H2>
      <Image src="/static/images/app.png" />
    </BodyWrapper>
  );
};

export default AppPage;
