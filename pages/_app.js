import App, { Container } from "next/app";
import Head from "next/head";
import React from "react";

import PageWrapper from "../components/PageWrapper";
import Header from "../components/Header";

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, router, ctx, pageProps } = this.props;
    return (
      <Container>
        <Head>
          <title>Grey Matter \ Next.js</title>
        </Head>
        <PageWrapper>
          <Header isNotIndex={router.asPath !== "/"} />
          <Component {...pageProps} />
        </PageWrapper>
      </Container>
    );
  }
}
