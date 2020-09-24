import React from "react";
import { styled } from "frontity";
import { colors } from "../../styles";

// Renders 2 images in a custom way.
const ImagesTypeB = ({ data, id }) => {
  const { images } = data;

  return (
    <ImagesWrapper id={id}>
      <Column1>
        <img src={images.img1.url} />
      </Column1>
      <Column2>
        <img src={images.img2.url} />
      </Column2>
    </ImagesWrapper>
  );
};

export default ImagesTypeB;

const ImagesWrapper = styled.div`
  display: flex;
  position: relative;
  width: 65.8vw;
  height: 100vh;
  background-color: ${colors.WHITE};
  z-index: 0;

  img {
    object-fit: cover;
  }
`;

const Column1 = styled.div`
  flex: 1;
  margin: auto;

  img {
    width: 33vw;
    height: 76vh;
  }
`;

const Column2 = styled.div`
  flex: 1;
  margin: auto;
  position: relative;

  img {
    position: absolute;
    width: 33vw;
    height: 46vh;
    bottom: -14vh;
    right: 16vw;
  }
`;
