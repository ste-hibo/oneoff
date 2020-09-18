import React from "react";
import { styled } from "frontity";
import { colors } from "../../styles";
import Link from "../link";

const TextAndImages = ({ data, id }) => {
  const { title, big_text, link, images, content } = data;

  return (
    <ContentWrapper id={id}>
      <Content>
        <TitleStyled>{title}</TitleStyled>
        <BigTextStyled>{big_text}</BigTextStyled>
        <LinkStyled link={link.url}>{link.title}</LinkStyled>
      </Content>
      <Content></Content>
      <Content></Content>
    </ContentWrapper>
  );
};

export default TextAndImages;

const ContentWrapper = styled.div`
  display: flex;
  position: relative;
  width: 127vw;
  height: 100vh;
  background-color: ${colors.WHITE};
  z-index: 0;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding-left: 9.8rem;
  padding-right: 10%;
`;

const TitleStyled = styled.div`
  font-size: 0.9375rem;
  font-family: Maison Neue Book;
  color: ${colors.SECONDARY};
`;

const BigTextStyled = styled.div`
  font-size: 3.6875rem;
  font-family: Circular Std;
  margin: 2rem 0;
`;

const LinkStyled = styled(Link)`
  font-size: 1.125rem;
  font-family: Maison Neue Demi;
  color: ${colors.GOLD};
  margin-top: 2rem;
`;
