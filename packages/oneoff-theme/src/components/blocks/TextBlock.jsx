import React from "react";
import { styled } from "frontity";
import { colors } from "../../styles";
import Link from "../link";
import { getTextWithoutParagraph } from "../../../utilities";

const TextBlock = ({ data, id }) => {
  const { title, big_text, content, link, width, background_color } = data;

  const renderTitle = () => {
    return title ? <h3>{title}</h3> : null;
  };

  const renderBigText = () => {
    return big_text ? (
      <h1
        dangerouslySetInnerHTML={{
          __html: getTextWithoutParagraph(big_text),
        }}
      ></h1>
    ) : null;
  };

  const renderParagraph = () => {
    return content ? <ParagraphStyled>{content}</ParagraphStyled> : null;
  };

  const renderLink = () => {
    return link ? <LinkStyled link={link.url}>{link.title}</LinkStyled> : null;
  };

  return (
    <ContentWrapper width={width} backgroundColor={background_color} id={id}>
      <Content hasParagraph={content !== ""}>
        {renderTitle()}
        {renderBigText()}
        {renderParagraph()}
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
    margin-bottom: 2rem;
    color: ${(props) =>
      props.backgroundColor === "white" ? colors.BLACK : colors.WHITE};
  }

  h3 {
    font-size: 0.9375rem;
    font-family: Maison Neue Book;
    margin-bottom: 2rem;
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
  padding: 0 ${(props) => (props.hasParagraph ? "24%" : "0")};
`;

const ParagraphStyled = styled.p`
  font-size: 1.0625rem;
  font-family: Maison Neue Light;
  line-height: 1.8125rem;
  margin-bottom: 1.5rem;
`;

const LinkStyled = styled(Link)`
  color: ${colors.GOLD};
  font-size: 1.125rem;
  font-family: Maison Neue Demi;
  margin-top: 2rem;
  line-height: 3;
`;
