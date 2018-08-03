import Link from "./Link";

const BottomLink = Link.extend`
  background-color: #262626;
  margin: 16px;
  border-radius: 12px;
  padding: 12px;

  &:hover {
    background-color: #242424;
  }
`;

export default BottomLink;
