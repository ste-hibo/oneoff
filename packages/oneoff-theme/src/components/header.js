import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import { Logo, SubLogo } from "./icons";
import { colors } from "../styles";

const Header = ({ state }) => {
  const { isMenuOpen } = state.theme;

  return (
    <Container>
      <LogoLink link="/">
        <Logo />
        <SubLogo color={isMenuOpen ? colors.WHITE : colors.GOLD} />
      </LogoLink>
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
  pointer-events: none;
`;

const LogoLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
`;
