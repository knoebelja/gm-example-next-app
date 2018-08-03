import styled from "styled-components";

const BodyWrapper = styled.div`
  grid-area: content;

  color: #fff;
  background: url("/static/images/decipher-mesh.png"),
    linear-gradient(to bottom, #262626, #000);
  background-size: auto 100vh, auto auto;
  background-position: center 50vh, center center;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default BodyWrapper;
