import React from "react";
import { styled } from "frontity";
import { colors } from "../../styles";

const Slider = ({ data, id }) => {
  const { images, content, image_custom_style } = data;

  return (
    <SliderStyled customStyle={image_custom_style} id={id} img={images[0].url}>
      <Content dangerouslySetInnerHTML={{ __html: content }}></Content>
      <Gradient />
    </SliderStyled>
  );
};

export default Slider;

const Gradient = styled.div`
  width: 100%;
  height: 16rem;
  bottom: 0;
  position: absolute;
  background-image: linear-gradient(
    0deg,
    ${colors.SLIDER_GRADIENT},
    transparent
  );
`;

const SliderStyled = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: url("${(props) => props.img}");
  // background-size: 100vw auto;
  background-repeat: no-repeat;
  z-index: -1;
  ${(props) => props.customStyle}
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
