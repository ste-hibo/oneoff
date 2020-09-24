import React from "react";
import { styled } from "frontity";
import { colors } from "../../styles";
import Link from "../link";
import { getTextWithoutParagraph } from "../../../utilities";

const TextBlock = ({ data, id }) => {
  const { title, big_text, content, link, width, background_color } = data;

  const renderLink = () => {
    return link ? <LinkStyled link={link.url}>{link.title}</LinkStyled> : null;
  };

  return (
    <ContentWrapper width={width} backgroundColor={background_color} id={id}>
      <Content>
        <h3>{title}</h3>
        <h1
          dangerouslySetInnerHTML={{
            __html: getTextWithoutParagraph(big_text),
          }}
        ></h1>
        <ParagraphStyled>{content}</ParagraphStyled>
        {renderLink()}
      </Content>
    </ContentWrapper>
  );
};

export default TextBlock;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width}vw;
  height: 100vh;
  background-color: ${(props) =>
    props.backgroundColor === "white" ? colors.WHITE : colors.BLACK};

  h1 {
    font-size: 3.073vw;
    font-family: Circular Std;
    margin: 2rem 0;
    color: ${(props) =>
      props.backgroundColor === "white" ? colors.BLACK : colors.WHITE};
  }

  h3 {
    font-size: 0.9375rem;
    font-family: Maison Neue Book;
    color: ${(props) =>
      props.backgroundColor === "white" ? colors.SECONDARY : colors.WHITE};
  }

  p {
    color: ${(props) =>
      props.backgroundColor === "white" ? colors.BLACK : colors.WHITE};
  }
`;

const Content = styled.div`
  margin: auto;
  margin-top: 20vh;
  // padding: 0 17rem;
`;

const ParagraphStyled = styled.p`
  font-size: 1.0625rem;
  font-family: Maison Neue Light;
  line-height: 1.8125rem;
`;

const LinkStyled = styled(Link)`
  color: ${colors.GOLD};
  font-size: 1.125rem;
  font-family: Maison Neue Demi;
  margin-top: 2rem;
  line-height: 3;
`;
