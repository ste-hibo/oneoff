import React from "react";
import { styled } from "frontity";
import { colors } from "../../styles";

// Renders 3 images in a custom way.
const ImagesTypeA = ({ data, id }) => {
  const { images, content } = data;

  return (
    <ImagesWrapper id={id}>
      <Column1>
        <img src={images.img1.url} />
      </Column1>
      <Column2>
        <p>{content}</p>
        <img src={images.img2.url} />
      </Column2>
      <Column3>
        <img src={images.img3.url} />
      </Column3>
    </ImagesWrapper>
  );
};

export default ImagesTypeA;

const ImagesWrapper = styled.div`
  display: flex;
  position: relative;
  width: 89vw;
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
  padding-top: 6rem;

  img {
    box-shadow: 60px -60px ${colors.GOLD};
    width: 24vw;
    height: 59vh;
  }
`;

const Column2 = styled.div`
  flex: 1;
  margin: auto;
  position: relative;
  margin-left: -22rem;

  p {
    position: absolute;
    width: 15.833vw;
    bottom: 15vh;
    right: 2vw;
    font-family: Maison Neue Book;
    font-size: 1.458vw;
    text-align: right;
    z-index: 1;
  }

  img {
    position: absolute;
    top: -7rem;
    right: -2vw;
    width: 18.4vw;
    height: 45vh;
  }
`;

const Column3 = styled.div`
  flex: 1;

  img {
    position: absolute;
    top: 8rem;
    z-index: -1;
    width: 40vw;
    height: 50vh;
  }
`;
