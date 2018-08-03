import Document, { Head, Main, NextScript } from "next/document";
import { injectGlobal, ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <title>GM Example Next App</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

injectGlobal`
  @font-face {
    font-family: "Metropolis";
    font-style: normal;
    font-weight: 400;
    src: url("static/fonts/Metropolis-Regular.woff");
  }

    @font-face {
    font-family: "Metropolis";
    font-style: normal;
    font-weight: 500;
    src: url("static/fonts/Metropolis-SemiBold.woff");
  }

      @font-face {
    font-family: "Metropolis";
    font-style: normal;
    font-weight: 600;
    src: url("static/fonts/Metropolis-Bold.woff");
  }

  html, body {
    width: 100%;
    height: 100vh;
    margin: 0;
    font-size: 14px;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";

    overscroll-behavior: none;
  }
`;

export default MyDocument;
