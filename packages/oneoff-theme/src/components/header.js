import React from "react";
import { connect, styled } from "frontity";
import LinkComponent from "@frontity/components/link";
import { Logo, SubLogo } from "./icons";
import { colors } from "../styles";

const Header = ({ state }) => {
  const { menuIsOpening, menuIsClosing } = state.theme;
  const menuOn = menuIsOpening && !menuIsClosing;

  return (
    <LogoWrapper>
      <LinkComponent link="/">
        <Logo blendMode={menuOn ? "normal" : "difference"} />
        <SubLogo color={menuOn ? colors.WHITE : colors.GOLD} />
      </LinkComponent>
    </LogoWrapper>
  );
};

export default connect(Header);

const LogoWrapper = styled.div`
  max-width: 100%;
  padding: 5rem;
`;
