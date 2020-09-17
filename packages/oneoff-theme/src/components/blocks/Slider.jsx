import React from "react";
import { styled } from "frontity";
import { colors } from "../../styles";

const Slider = ({ data }) => {
  const { images, content } = data;

  return (
    <>
      <SliderStyled img={images[0].url}>
        <Content dangerouslySetInnerHTML={{ __html: content }}></Content>
        <Gradient/>
      </SliderStyled>
    </>
  );
};

export default Slider;

const Gradient = styled.div`
  width: 100%;
  height: 16rem;
  bottom: 0;
  position: absolute;
  background-image: linear-gradient(0deg, ${colors.SLIDER_GRADIENT}, transparent);
`;

const SliderStyled = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: url("${(props) => props.img}");
  background-size: 100vw auto;
  background-position: 0 50%;
  z-index: -1;
`;

const Content = styled.div`
  font-size: 2.6875rem;
  font-family: Circular Book;
  text-align: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 50%;
  height: 55%;
  margin: auto;
  line-height: 3.5rem;
`;
