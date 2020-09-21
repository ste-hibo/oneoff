import React from "react";
import { styled } from "frontity";
import { colors } from "../../styles";
import Link from "../link";
import Image from "@frontity/components/image";

const TextAndImages = ({ data, id }) => {
  const { title, big_text, link, images, content } = data;

  const renderLink = () => {
    return link ? <LinkStyled link={link.url}>{link.title}</LinkStyled> : null;
  };

  return (
    <ContentWrapper id={id}>
      <Content1>
        <TitleStyled>{title}</TitleStyled>
        <BigTextStyled
          dangerouslySetInnerHTML={{ __html: big_text }}
        ></BigTextStyled>
        {renderLink()}
      </Content1>
      <Content2>
        <ImageStyled src={images.img1.url} />
      </Content2>
      <Content3>
        <p>{content}</p>
        <Image src={images.img2.url} />
        <Image src={images.img3.url} />
      </Content3>
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

const Content1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding-left: 9.8rem;
`;

const Content2 = styled.div`
  flex: 1;
  margin: auto;
  padding-top: 6rem;
  padding-left: 5rem;

  img {
    box-shadow: 60px -60px ${colors.GOLD};
  }
`;

const Content3 = styled.div`
  flex: 2;
  margin: auto;
  position: relative;

  p {
    position: absolute;
    width: 19rem;
    bottom: 9rem;
    right: 44rem;
    font-family: Maison Neue Book;
    font-size: 1.75rem;
    text-align: right;
  }

  img:nth-of-type(1) {
    position: absolute;
    bottom: -22rem;
    right: 39rem;
  }

  img:nth-of-type(2) {
    position: absolute;
    right: -6rem;
    bottom: -13rem;
    z-index: -1;
  }
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

const ImageStyled = styled(Image)``;
