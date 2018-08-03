import styled from "styled-components";

const PageWrapper = styled.div`
  display: grid;

  height: 100vh;
  width: 100vw;

  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr;
  grid-template-areas:
    "header"
    "content";

  &:after {
    content: "Joseph Knoebel";
    position: fixed;
    color: #fff;
    font-size: 24px;
    text-shadow: 2px 2px #000;
    z-index: 2;
    top: calc(100vh - 80px);
    left: calc(100vw - 200px);
    width: 100%;
    height: 100%;
  }
`;

export default PageWrapper;
