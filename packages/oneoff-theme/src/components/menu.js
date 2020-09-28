import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import { CloseIcon, MenuIcon } from "./icons";
import { colors } from "../styles";

const Menu = ({ state, actions }) => {
  const {
    isMenuOpen,
    menuIsOpening,
    menuIsClosing,
    scrollProgress,
  } = state.theme;
  const data = state.source.get(state.router.link);

  const menuToggleTimeout = 900;
  const altColorThreshold = 86.25;
  const iconColor =
    !data.isPage || scrollProgress.percent < altColorThreshold
      ? colors.GOLD
      : colors.WHITE;

  useEffect(() => {
    if (menuIsOpening) {
      actions.theme.closeMenu();
    }
  }, [state.router.link]);

  useEffect(() => {
    setTimeout(() => {
      if (menuIsOpening) {
        actions.theme.setMenuOpen();
      }
    }, menuToggleTimeout);
  }, [menuIsOpening]);

  useEffect(() => {
    setTimeout(() => {
      if (menuIsClosing) {
        actions.theme.setMenuClose();
      }
    }, menuToggleTimeout);
  }, [menuIsClosing]);

  return (
    <MenuToggle
      onClick={!isMenuOpen ? actions.theme.openMenu : actions.theme.closeMenu}
    >
      {menuIsOpening && !menuIsClosing ? (
        <CloseIcon />
      ) : (
        <MenuIcon color={iconColor} />
      )}
    </MenuToggle>
  );
};

export default connect(Menu);

const MenuToggle = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  cursor: pointer;
  margin: 4rem;
  padding: 1rem;
  z-index: 1;

  line {
    transition: all 0.5s;
  }
`;
