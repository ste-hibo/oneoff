import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import { CloseIcon, MenuIcon } from "./icons";
import { colors } from "../styles";
import { checkIfUseAlternateColors } from "../../utilities";

const Menu = ({ state, actions }) => {
  const {
    isMenuOpen,
    menuIsOpening,
    menuIsClosing,
  } = state.theme;

  const altColorThreshold = 86.25;
  const iconColor = checkIfUseAlternateColors(state, altColorThreshold)
    ? colors.GOLD
    : colors.WHITE;

  useEffect(() => {
    if (menuIsOpening) {
      actions.theme.closeMenu();
    }
  }, [state.router.link]);

  return (
    <MenuToggle
      onClick={!isMenuOpen ? actions.theme.openMenu : actions.theme.closeMenu}
    >
      {menuIsOpening && !menuIsClosing ? (
        <CloseIconContainer>
          <CloseIcon strokeWidth={2} />
        </CloseIconContainer>
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

const CloseIconContainer = styled.div`
  width: 1.375rem;
  height: 1.375rem;
`;
