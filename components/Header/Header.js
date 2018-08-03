import HeaderNav from "./HeaderNav";
import HeaderTitle from "./HeaderTitle";
import HeaderLogo from "./HeaderLogo";
import HeaderWrapper from "./HeaderWrapper";
import Navigation from "../Navigation";

const Header = ({ isNotIndex }) => (
  <HeaderWrapper>
    <HeaderTitle>
      <HeaderLogo src="/static/images/decipher-logo.png" />Grey Matter \ Next.js
    </HeaderTitle>
    {isNotIndex && (
      <HeaderNav>
        <Navigation isNotIndex={isNotIndex} />
      </HeaderNav>
    )}
  </HeaderWrapper>
);

export default Header;
