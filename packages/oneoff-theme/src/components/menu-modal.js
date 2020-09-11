import React, { useRef } from "react";
import { styled, connect } from "frontity";
import Link from "./link";
import { colors } from "../styles";
import Image from "@frontity/components/image";

const MenuModal = ({ state }) => {
  const { menu, menuIsClosing } = state.theme;
  const isThereLinks = menu != null && menu.length > 0;
  const backgroundImageUrl =
    "http://oneoff.7frwk6ymb9-ewx3lz9el4zq.p.runcloud.link/wp-content/uploads/2020/09/menu-background.png";

  return (
    <>
      <MenuOverlay className={menuIsClosing ? "close" : ""} />
      <MenuContent>
        <MenuImage src={backgroundImageUrl} className={menuIsClosing ? "close" : ""} />
        <LinksWrapper className={menuIsClosing ? "close" : ""}>
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

const animationParams = {
  overlay:  ["1s    ease", "1s    ease"],
  image:    ["0.75s ease", "0.75s ease"],
  links:    ["0.5s  ease", "0.5s  ease"],
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

  @keyframes close-overlay {
    0% {
      width: 100vw;
    }
    100% {
      width: 0;
    }
  }

  background-color: ${colors.MENU_BACKGROUND};
  float: right;
  animation: open-overlay ${animationParams.overlay[0]} forwards;
  width: 0;
  height: 100vh;

  &.close {
    animation: close-overlay ${animationParams.overlay[1]} forwards;
  }
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
  animation: open-image ${animationParams.image[0]} forwards;

  &.close {
    animation: close-image ${animationParams.image[1]} forwards;
  }
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

  @keyframes hide-links {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  animation: show-links ${animationParams.links[0]} forwards;
  margin-top: 19rem;
  margin-left: 8.4375rem;
  opacity: 0;

  &.close {
    animation: hide-links ${animationParams.links[1]} forwards;
  }
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
