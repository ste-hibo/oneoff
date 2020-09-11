import React from "react";
import { styled, connect } from "frontity";
import Link from "./link";
import Nav from "./nav";
import { colors } from "../styles";

const MenuModal = ({ state }) => {
  const { menu } = state.theme;
  const isThereLinks = menu != null && menu.length > 0;

  return (
    <>
      <MenuOverlay />
      <MenuContent>
        {isThereLinks &&
          menu.map(([name, link]) => (
            <MenuLink
              key={name}
              link={link}
              aria-current={state.router.link === link ? "page" : undefined}
            >
              {name}
            </MenuLink>
          ))}
      </MenuContent>
    </>
  );
};

const MenuOverlay = styled.div`
  background-color: ${colors.MENU_BACKGROUND};
  width: 100vw;
  height: 100vh;
  overflow: hidden auto;
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
`;

const MenuContent = styled.div`
  z-index: 3;
`;

const MenuLink = styled(Link)`
  width: 100%;
  display: inline-block;
  outline: 0;
  text-align: center;
  padding: 1.2rem 0;
  font-size: 3rem;
  color: ${colors.WHITE};
  font-family: Circular Book;

  &:hover,
  &:focus {
    text-decoration: line-through;
  }
  /* style for active link */
  &[aria-current="page"] {
    text-decoration: line-through;
  }
`;

export default connect(MenuModal);
