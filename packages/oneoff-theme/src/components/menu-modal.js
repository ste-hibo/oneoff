import React, { useState } from "react";
import { styled, connect } from "frontity";
import Link from "./link";
import LinkComponent from "@frontity/components/link";
import { colors, calcLineThroughHeight } from "../styles";
import { InstagramIcon } from "./icons";
import ContactLinks from "./ContactLinks";

const MenuModal = ({ state }) => {
  const { menu, defaultMenuImage, menuIsClosing, socials } = state.theme;
  const isThereLinks = menu != null && menu.length > 0;
  const closeClass = "close";
  const menuImages = Object.fromEntries(menu);

  const [menuImage, setMenuImage] = useState(defaultMenuImage);

  const changeMenuImage = (ev) => {
    setMenuImage(menuImages[ev.target.pathname]);
  };

  const renderOverImages = () => {
    return menu.map(([link, image, name], i) => {
      const visible = image === menuImage;
      return (
        <ImageOver
          key={`${image}_${i}`}
          src={image || defaultMenuImage}
          style={{ opacity: visible ? 1 : 0 }}
        />
      );
    });
  };

  const renderContactLinks = () => {
    return (
      <ContactLinksWrapper className={menuIsClosing ? closeClass : ""}>
        <ContactLinks />
      </ContactLinksWrapper>
    );
  };

  const renderMenuImages = () => {
    return (
      <ImagesWrapper className={menuIsClosing ? closeClass : ""}>
        {renderOverImages()}
        <MenuImage src={defaultMenuImage} />
      </ImagesWrapper>
    );
  };

  const renderMenuLinks = () => {
    return (
      <LinksWrapper className={menuIsClosing ? closeClass : ""}>
        {isThereLinks &&
          menu.map(([link, image, name]) => (
            <MenuLink
              key={name}
              link={link}
              aria-current={state.router.link === link ? "page" : undefined}
              onMouseOver={changeMenuImage}
            >
              {name}
            </MenuLink>
          ))}
        <IconContainer link={socials.instagram}>
          <InstagramIcon />
        </IconContainer>
      </LinksWrapper>
    );
  };

  return (
    <>
      <MenuOverlay className={menuIsClosing ? closeClass : ""} />
      {renderContactLinks()}
      <MenuContent>
        {renderMenuImages()}
        {renderMenuLinks()}
      </MenuContent>
    </>
  );
};

export default connect(MenuModal);

// [opening, closing]
const animationParams = {
  overlay: ["1s ease", "1s     ease"],
  image: ["0.75s ease", "0.75s ease"],
  links: ["0.5s ease", "0.5s   ease"],
};

const ContactLinksWrapper = styled.div`
  animation: show-links ${animationParams.links[0]} forwards;
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 4rem 6rem;
  text-align: end;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  &.close {
    animation: hide-links ${animationParams.links[1]} forwards;
  }
`;

const IconContainer = styled(Link)`
  display: inline-flex;
  border: 1px solid ${colors.GOLD};
  border-radius: 3rem;
  padding: 1.125rem;
  margin-top: 1rem;
  background-color: transparent;
  transition: background-color 0.35s ease;

  :hover {
    background-color: ${colors.GOLD};

    svg {
      path {
        transition: fill 0.35s ease;
        fill: ${colors.WHITE};
      }
    }
  }
`;

const MenuOverlay = styled.div`
  @keyframes open-overlay {
    0% {
      transform: translateX(100vw);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes close-overlay {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(100vw);
    }
  }

  position: fixed;
  background-color: ${colors.MENU_BACKGROUND};
  float: left;
  animation: open-overlay ${animationParams.overlay[0]} forwards;
  width: 100vw;
  height: 100vh;
  transform: translateX(100vw);

  &.close {
    animation: close-overlay ${animationParams.overlay[1]} forwards;
  }
`;

const MenuContent = styled.div`
  color: ${colors.WHITE};
  display: flex;
  background-color: transparent;
  position: fixed;
`;

const ImagesWrapper = styled.div`
  @keyframes open-image {
    0% {
      transform: translateY(100vh);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes close-image {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(100vh);
    }
  }

  transform: translateY(100vh);
  animation: open-image ${animationParams.image[0]} forwards;

  &.close {
    animation: close-image ${animationParams.image[1]} forwards;
  }
`;

const MenuImage = styled.img`
  height: 100vh;
`;

const ImageOver = styled.img`
  height: 100vh;
  position: absolute;
  z-index: 1;
  opacity: 0;

  transition: opacity 0.5s;
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
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 8.4375rem;
  opacity: 0;

  &.close {
    animation: hide-links ${animationParams.links[1]} forwards;
  }
`;

const fontSizes = {
  menuLink: "2.9375rem",
};
const MenuLink = styled(LinkComponent)`
  color: ${colors.WHITE};
  outline: 0;
  padding: 1.2rem 0;
  font-size: ${fontSizes.menuLink};
  font-family: Circular Book;

  &::after {
    background-color: ${colors.WHITE};
    height: ${calcLineThroughHeight(fontSizes.menuLink)};
  }

  &[aria-current="page"] {
    ::after {
      width: 100%;
    }
  }
`;