import React from "react";

import BodyWrapper from "../components/BodyWrapper";
import H1 from "../components/H1";
import H2 from "../components/H2";
import Image from "../components/Image";

const LinkPage = () => {
  return (
    <BodyWrapper>
      <H1>Webpack Support</H1>
      <H2>next.config.js</H2>
      <Image src="/static/images/webpack.png" />
    </BodyWrapper>
  );
};

export default LinkPage;
