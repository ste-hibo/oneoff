import React from "react";
import { styled } from "frontity";

const Slider = ({ data }) => {
  const { images, content } = data;

  return (
    <>
      <SliderStyled img={images[0].url}>
        <Content dangerouslySetInnerHTML={{ __html: content }}></Content>
      </SliderStyled>
    </>
  );
};

export default Slider;

const SliderStyled = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: url("${(props) => props.img}");
  background-size: 100vw auto;
  background-position: 0 50%;
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
