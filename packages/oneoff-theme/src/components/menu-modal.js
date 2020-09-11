import React from "react";
import { styled, connect } from "frontity";
import Link from "./link";
import { colors } from "../styles";
import Image from "@frontity/components/image";

const MenuModal = ({ state }) => {
  const { menu } = state.theme;
  const isThereLinks = menu != null && menu.length > 0;
  const backgroundImageUrl =
    "http://oneoff.7frwk6ymb9-ewx3lz9el4zq.p.runcloud.link/wp-content/uploads/2020/09/menu-background.png";

  return (
    <>
      <MenuOverlay />
      <MenuContent>
        <MenuImage src={backgroundImageUrl} />
        <LinksWrapper>
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
        </LinksWrapper>
      </MenuContent>
    </>
  );
};

const MenuOverlay = styled.div`
  @keyframes open-overlay {
    0% {
      width: 0;
    }
    100% {
      width: 100vw;
    }
  }

  background-color: ${colors.MENU_BACKGROUND};
  float: right;
  animation: open-overlay 1s ease forwards;
  width: 0;
  height: 100vh;
`;

const MenuContent = styled.div`
  color: ${colors.WHITE};
  display: flex;
  background-color: transparent;
  position: absolute;
`;

const MenuImage = styled(Image)`
  @keyframes open-image {
    0% {
      transform: translate(0, 100vh);
    }
    100% {
      transform: translate(0, 0);
    }
  }

  @keyframes close-image {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(0, 100vh);
    }
  }

  height: 100vh;
  transform: translate(0, 100vh);
  animation: open-image 0.75s ease forwards;
`;

const LinksWrapper = styled.div`
  @keyframes show-links {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  animation: show-links .5s ease forwards;
  margin-top: 19rem;
  margin-left: 8.4375rem;
  opacity: 0;
`;

const MenuLink = styled(Link)`
  width: 100%;
  display: inline-block;
  outline: 0;
  padding: 1.2rem 0;
  font-size: 2.9375rem;
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
