import React from "react";
import { styled } from "frontity";

const TextBlock = ({ data, id }) => {
  const { image, image_custom_style } = data;

  return image ? <ImageStyled id={id} customStyle={image_custom_style} src={image.url}></ImageStyled> : null;
};

export default TextBlock;

const ImageStyled = styled.img`
  height: 100vh;
  width: auto;
  z-index: -2;
  ${(props) => props.customStyle}
`;
