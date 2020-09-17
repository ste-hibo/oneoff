import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import { Logo, SubLogo } from "./icons";
import { colors } from "../styles";

const Header = ({ state }) => {
  const { menuIsOpening, menuIsClosing } = state.theme;
  const menuOn = menuIsOpening && !menuIsClosing;

  return (
    <LogoWrapper>
      <LogoLink link="/">
        <Logo blendMode={menuOn ? "normal" : "difference"} />
        <SubLogo color={menuOn ? colors.WHITE : colors.GOLD} />
      </LogoLink>
    </LogoWrapper>
  );
};

export default connect(Header);

const LogoWrapper = styled.div`
  max-width: 100%;
  padding: 5rem;
  pointer-events: none;
`;

const LogoLink = styled(Link)`
`;
