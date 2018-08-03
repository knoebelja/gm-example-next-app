import React from "react";

import { IndexH1 as H1 } from "../components/H1";
import H2 from "../components/H2";
import Link from "../components/Link";
import BodyWrapper from "../components/BodyWrapper";
import UnorderedList from "../components/UnorderedList";

const FunFeaturesPage = () => (
  <BodyWrapper>
    <H1>Features</H1>
    <UnorderedList>
      <H2>Easy Setup</H2>
      <H2>Easy Routing</H2>
      <H2>Hot Module Replacement </H2>
      <H2>Automatic Code Splitting</H2>
      <H2>Code Prefetching</H2>
      <H2>Dynamic Imports</H2>
      <H2>Server-side Rendering</H2>
      <H2>Client-side Rendering</H2>
      <H2>Static HTML Exporting</H2>
      <H2>Highly Customizable</H2>
      <H2>Community Support</H2>
      <br />
      <Link href="https://open.segment.com/create-next-app" target="_blank">
        Check out create-next-app for more examples!
      </Link>
    </UnorderedList>
  </BodyWrapper>
);

export default FunFeaturesPage;
