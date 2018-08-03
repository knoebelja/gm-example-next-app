import { Component } from "react";

import H1 from "../components/H1";
import H2 from "../components/H2";
import BodyWrapper from "../components/BodyWrapper";
import Image from "../components/Image";

class Error extends Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    return (
      <BodyWrapper>
        <H1>
          {this.props.statusCode
            ? `An error ${this.props.statusCode} occurred on server`
            : "An error occurred on client"}
        </H1>
        <H2>pages/_error.js</H2>
        <Image src="/static/images/error.png" />
      </BodyWrapper>
    );
  }
}

export default Error;
