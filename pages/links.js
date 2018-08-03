import React from "react";

import BodyWrapper from "../components/BodyWrapper";
import H1 from "../components/H1";
import H2 from "../components/H2";
import Image from "../components/Image";

const LinkPage = () => {
  return (
    <BodyWrapper>
      <H1>Links</H1>
      <H2>import Link from "next/link";</H2>
      <Image src="/static/images/links.png" />
    </BodyWrapper>
  );
};

export default LinkPage;
