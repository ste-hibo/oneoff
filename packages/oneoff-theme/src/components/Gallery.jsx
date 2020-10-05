import React, { useEffect } from "react";
import { connect, styled, Global, css, keyframes } from "frontity";
import { colors } from "../styles";
import { CloseIcon } from "./icons";
import { Carousel } from "react-responsive-carousel";
import carouselCss from "react-responsive-carousel/lib/styles/carousel.min.css";

const Gallery = ({ state, actions }) => {
  const data = state.source.get(state.router.link);
  const page = state.source[data.type][data.id];
  const { acf } = page;

  useEffect(() => {
    const carousel = document.getElementsByClassName("carousel-root");
    if (carousel && carousel[0]) {
      carousel[0].focus();
    }
  }, []);

  const renderImages = () => {
    return acf && acf.gallery
      ? acf.gallery.map((img) => {
          return (
            <ImageContainer key={img.id}>
              <StyledImage src={img.url} />
              <StyledCaption>{img.caption}</StyledCaption>
            </ImageContainer>
          );
        })
      : null;
  };

  return (
    <>
      <GalleryContent className={state.theme.galleryIsClosing ? "close" : ""}>
        <IconCloseContainer onClick={actions.theme.closeGallery}>
          <CloseIcon strokeWidth={1} />
        </IconCloseContainer>
        <Carousel
          showStatus={false}
          infiniteLoop={true}
          useKeyboardArrows={true}
          swipeable={true}
          showIndicators={false}
          emulateTouch={true}
          dynamicHeight={false}
        >
          {renderImages()}
        </Carousel>
      </GalleryContent>
      <Global styles={css(carouselCss)} />
      <Global
        styles={`
      .control-next.control-arrow::before {
        transform: rotateY(180deg);
      }
      `}
      />
    </>
  );
};

export default connect(Gallery);

const showGallery = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const hideGallery = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const GalleryContent = styled.div`
  color: ${colors.WHITE};
  display: flex;
  background-color: ${colors.BLACK};
  position: fixed;
  z-index: -2;
  opacity: 0;
  animation: ${showGallery} 0.5s ease forwards;

  &.close {
    animation: ${hideGallery} 0.5s ease forwards;
  }

  .carousel-slider {
    display: flex;
    height: 100vh;

    .slider-wrapper {
      width: 54%;
    }

    .control-arrow {
      margin-top: 75vh !important;
      padding: 0 27.5rem !important;
      background: transparent !important;

      &::before {
        margin: 0 !important;
        border: none !important;
        content: url("data:image/svg+xml; utf8, <svg xmlns='http://www.w3.org/2000/svg' width='63.801' height='9.541' viewBox='0 0 63.801 9.541'><g transform='translate(3043.301 799.51) rotate(180)'><line x2='62' transform='translate(2979.5 794.5)' fill='none' stroke='white' stroke-width='1.5'/><path d='M0,0H6V6' transform='translate(3038 790.5) rotate(45)' fill='none' stroke='white' stroke-width='1.5'/></g></svg>") !important;
      }
    }
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImage = styled.img`
  width: 52vw;
  height: auto;
`;

const StyledCaption = styled.div`
  font-family: Maison Neue;
  font-size: 1.0625rem;
  color: ${colors.WHITE};
  margin-top: 1rem;
`;

const IconCloseContainer = styled.div`
  position: absolute;
  left: 75vw;
  top: 4.5rem;
  width: 2.125rem;
  height: 2.125rem;
  cursor: pointer;
  z-index: 1;
`;
