import React from "react";
import { styled } from "frontity";

const TextBlock = ({ data, id }) => {
  const { image } = data;

  return image ? <ImageStyled id={id} src={image.url}></ImageStyled> : null;
};

export default TextBlock;

const ImageStyled = styled.img`
  height: 100vh;
  width: auto;
`;
