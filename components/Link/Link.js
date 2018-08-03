import styled from "styled-components";

import LinkComponent from "./LinkComponent";

const Link = styled(LinkComponent)`
  padding: 16px;
  text-decoration: none;
  cursor: pointer;
  color: #fff;
  font-size: 16px;
  &:hover {
    color: #02f226;
  }
`;

export default Link;
