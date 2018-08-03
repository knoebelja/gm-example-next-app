import React from "react";

import BodyWrapper from "../components/BodyWrapper";
import H1 from "../components/H1";
import H2 from "../components/H2";
import Image from "../components/Image";

const BabelPage = () => {
  return (
    <BodyWrapper>
      <H1>Babel Support</H1>
      <H2>.babelrc</H2>
      <Image src="/static/images/babel.png" />
    </BodyWrapper>
  );
};

export default BabelPage;
