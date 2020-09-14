import React from "react";
import { styled } from "frontity";
import { colors } from "../../styles";

const WceeBlock = ({ data }) => {
  const { content } = data;

  return (
    <>
      <ContentWrapper>
        <WceeStyled>We Create Exclusive Events</WceeStyled>
        <Content dangerouslySetInnerHTML={{ __html: content }}></Content>
      </ContentWrapper>
    </>
  );
};

export default WceeBlock;

const WceeStyled = styled.h1`
  font-size: 6.25rem;
  font-family: Circular Bold;
  color: transparent;
  -webkit-text-stroke: 1px ${colors.WHITE};
  transition: color .5s;

  /* style for active section */
  &[aria-current="section"] {
    color: ${colors.GOLD};
    -webkit-text-stroke-color: ${colors.GOLD};
  }
`;

const ContentWrapper = styled.div`
  width: 30vw;
  height: 100vh;
  background-color: ${colors.BLACK};
`;

const Content = styled.div`
  font-size: 1.0625rem;
  font-family: Maison Neue Light;
  color: ${colors.WHITE};
`;
