import React from "react";

import BodyWrapper from "../components/BodyWrapper";
import H1 from "../components/H1";
import H2 from "../components/H2";
import BoxWrapper from "../components/BoxWrapper";
import SmallImage from "../components/SmallImage";

const ScriptsPage = () => {
  return (
    <BodyWrapper>
      <H1>Scripts</H1>
      <H2>package.json</H2>
      <BoxWrapper>
        <H2>out of the box</H2>
        <SmallImage src="/static/images/script1.png" />
        <H2>with custom server</H2>
        <SmallImage src="/static/images/script2.png" />
      </BoxWrapper>
    </BodyWrapper>
  );
};

export default ScriptsPage;
