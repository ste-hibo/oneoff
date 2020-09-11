import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import { CloseIcon, MenuIcon } from "./icons";
import MenuModal from "./menu-modal";

const Menu = ({ state, actions }) => {
  const { isMenuOpen } = state.theme;

  useEffect(() => {
    actions.theme.closeMenu();
  }, [state.router.link]);

  return (
    <>
      <MenuToggle onClick={actions.theme.toggleMenu}>
        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </MenuToggle>
      {isMenuOpen && <MenuModal />}
    </>
  );
};

export default connect(Menu);

const MenuToggle = styled.div`
  position: absolute;
  right: 0;
  cursor: pointer;
  margin: 4rem;
  padding: 1rem;
`;
