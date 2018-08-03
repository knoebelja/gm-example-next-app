import React from "react";

import BodyWrapper from "../components/BodyWrapper";
import H1 from "../components/H1";
import H2 from "../components/H2";
import Image from "../components/Image";

const ExpressPage = () => {
  return (
    <BodyWrapper>
      <H1>Express Support</H1>
      <H2>server.js</H2>
      <Image src="/static/images/server.png" />
    </BodyWrapper>
  );
};

export default ExpressPage;
