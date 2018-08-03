import { Fragment } from "react";

import Link from "./Link";

const Navigation = ({ isNotIndex }) => (
  <Fragment>
    <Link href="/start">Getting Started</Link>
    <Link href="/scripts">Scripts</Link>
    <Link href="/pages">Pages</Link>
    <Link href="/links">Links</Link>
    <Link href="/query">Querying</Link>
    <Link href="/app">App</Link>
    <Link href="/document">Document</Link>
    <Link href="/error">Error</Link>
    <Link href="/babel">Babel</Link>
    <Link href="/webpack">Webpack</Link>
    <Link href="/express">Express</Link>
    <Link href="/features">Features</Link>
    {isNotIndex && <Link href="/">Index</Link>}
  </Fragment>
);

export default Navigation;
