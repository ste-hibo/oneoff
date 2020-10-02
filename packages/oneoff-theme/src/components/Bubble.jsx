import React from "react";
import { styled } from "frontity";
import { colors } from "../styles";

const Bubble = ({ data }) => {
  const { title, image, content } = data;

  return (
    <StyledBubble image={image}>
      <StyledLabel>{title}</StyledLabel>
    </StyledBubble>
  );
};

export default Bubble;

const StyledBubble = styled.div`
  position: relative;
  width: 11vw;
  height: 11vw;
  border: 1px solid ${colors.DARK_GREY};
  border-radius: 100%;
  background: url("${(props) => props.image.url}") no-repeat center;
  margin: 0 1.625rem;
`;

const StyledLabel = styled.label`
  position: absolute;
  width: 100%;
  top: 12vw;
  text-align: center;
  font-family: Maison Neue Light;
  font-size: 1.0625rem;
`;
