import { Component, Fragment } from "react";

import H1 from "../components/H1";
import H2 from "../components/H2";
import Image from "../components/Image";
import formatName from "../utils/formatName";
import BodyWrapper from "../components/BodyWrapper";
import QueryNavigation from "../components/QueryNavigation";

class QueryPage extends Component {
  static async getInitialProps({ query }) {
    const name = query.name ? formatName(query.name) : "Code";
    const src = query.name && query.name !== "code" ? query.name : "query";
    return { name, src, query: query.name };
  }

  render() {
    const { name, query, src } = this.props;
    return (
      <BodyWrapper>
        <H1>What is {name}?</H1>
        <H2>{query ? `/query?name=${query}` : `/query`}</H2>
        <Image src={`/static/images/${src}.png`} />
        <QueryNavigation />
      </BodyWrapper>
    );
  }
}

export default QueryPage;
