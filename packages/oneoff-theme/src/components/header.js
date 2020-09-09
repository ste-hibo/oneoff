import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import Image from "@frontity/components/image";

const Header = ({ state }) => {
  const logoBlackUrl = `${state.frontity.url}wp-content/uploads/2020/09/logo-small.png`;
  const logoWhiteUrl = `${state.frontity.url}wp-content/uploads/2020/09/logo-small-white.png`;

  return (
    <Container>
      <StyledLink link="/">
        <Logo src={logoBlackUrl} alt="Logo" />
      </StyledLink>
      {/* <Nav /> */}
    </Container>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Container = styled.div`
  position: absolute;
  max-width: 100%;
  box-sizing: border-box;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  z-index: 100
`;

const Logo = styled(Image)`
  margin: 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
