import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import { CloseIcon, MenuIcon } from "./icons";

const Menu = ({ state, actions }) => {
  const { isMenuOpen, menuIsOpening, menuIsClosing } = state.theme;
  const menuToggleTimeout = 1000;

  useEffect(() => {
    if (isMenuOpen) {
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
      {menuIsOpening && !menuIsClosing ? <CloseIcon /> : <MenuIcon />}
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
`;
