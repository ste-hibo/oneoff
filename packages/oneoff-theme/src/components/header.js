import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import { Logo, SubLogo } from "./icons";
import { colors } from "../styles";

const Header = ({ state }) => {
  const { menuIsOpening, menuIsClosing } = state.theme;
  const menuOn = menuIsOpening && !menuIsClosing;

  return (
    <Container menuOn={menuOn}>
      <LogoLink link="/">
        <Logo blendMode={menuOn ? "normal" : "difference"} />
        <SubLogo color={menuOn ? colors.WHITE : colors.GOLD} />
      </LogoLink>
    </Container>
  );
};

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
  z-index: ${(props) => props.menuOn ? "10" : "auto"};
`;

const LogoLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
`;
