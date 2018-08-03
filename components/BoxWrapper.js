import styled from "styled-components";

const BoxWrapper = styled.div`
  display: grid;
  grid-gap: 64px;
  grid-template-columns: auto 1fr;
  text-align: right;
  img {
    align-self: center;
  }
`;

export default BoxWrapper;
