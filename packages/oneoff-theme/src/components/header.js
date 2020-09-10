import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import Image from "@frontity/components/image";
import { colors } from "../styles.js";

const Header = ({ state }) => {
  const logoUrl = `${state.frontity.url}/wp-content/uploads/2020/09/logo-white.png`;
  const subLogoUrl = `${state.frontity.url}/wp-content/uploads/2020/09/sublogo.png`;

  return (
    <Container>
      <LogoLink link="/">
        <Logo src={logoUrl} alt="Logo" />
        <SubLogo src={subLogoUrl} alt="Logo" />
      </LogoLink>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="27.805"
        height="11.494"
        viewBox="0 0 27.805 11.494"
      >
        <g transform="translate(0 1)">
          <line x2="27.805" fill="none" stroke={colors.GOLD} stroke-width="2" />
          <line
            x2="27.805"
            transform="translate(0 9.494)"
            fill="none"
            stroke={colors.GOLD}
            stroke-width="2"
          />
        </g>
      </svg>
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
  pointer-events: none;
`;

const Logo = styled(Image)`
  width: 8.5rem;
  mix-blend-mode: difference;
`;

const SubLogo = styled(Image)`
  width: 8.5rem;
  padding-top: 0.5rem;
`;

const LogoLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
`;
