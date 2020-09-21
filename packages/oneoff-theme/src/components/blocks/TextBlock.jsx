import React from "react";
import { styled } from "frontity";
import { colors } from "../../styles";

const TextBlock = ({ data, id }) => {
  const { title, big_text, content, background_color } = data;

  return <Content></Content>;
};

export default TextBlock;

const Content = styled.div``;
