import React from "react";
import { styled } from "frontity";

const TextBlock = ({ data, id }) => {
  const { image, image_custom_style } = data;

  return image ? (
    <BlockWrapper>
      <StyledImage
        id={id}
        customStyle={image_custom_style}
        src={image.url}
      ></StyledImage>
    </BlockWrapper>
  ) : null;
};

export default TextBlock;

const BlockWrapper = styled.div`
  height: 100vh;
  width: fit-content;
`;

const StyledImage = styled.img`
  height: 100%;
  width: auto;
  z-index: -2;
  ${(props) => props.customStyle}
`;
