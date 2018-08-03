import React from "react";

import BodyWrapper from "../components/BodyWrapper";
import { IndexH1 as H1 } from "../components/H1";
import UnorderedList from "../components/UnorderedList";
import Navigation from "../components/Navigation";

const IndexPage = ({ currentPage }) => {
  return (
    <BodyWrapper>
      <H1>Table of Contents</H1>
      <UnorderedList>
        <Navigation currentPage={currentPage} />
      </UnorderedList>
    </BodyWrapper>
  );
};

export default IndexPage;
