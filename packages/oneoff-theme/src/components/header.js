import React from "react";
import { connect, styled } from "frontity";
import LinkComponent from "@frontity/components/link";
import { Logo, SubLogo } from "./icons";
import { colors } from "../styles";

const Header = ({ state }) => {
  const { menuIsOpening, menuIsClosing, scrollProgress } = state.theme;
  const data = state.source.get(state.router.link);

  const altColorThreshold = 98.03;
  const menuOn = menuIsOpening && !menuIsClosing;
  const whiteLogo = menuOn || data.isPage && scrollProgress.percent >= altColorThreshold;

  return (
    <LogoWrapper>
      <LinkComponent link="/">
        <Logo blendMode={whiteLogo ? "normal" : "difference"} />
        <SubLogo color={whiteLogo ? colors.WHITE : colors.GOLD} />
      </LinkComponent>
    </LogoWrapper>
  );
};

export default connect(Header);

const LogoWrapper = styled.div`
  max-width: 100%;
  padding: 5rem;
`;
