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
    return content ? <StyledParagraph>{content}</StyledParagraph> : null;
  };

  const renderLink = () => {
    return link ? <StyledLink link={link.url}>{link.title}</StyledLink> : null;
  };

  return (
    <BlockWrapper width={width} backgroundColor={background_color} id={id}>
      <ContentWrapper hasParagraph={content !== ""}>
        {renderTitle()}
        {renderBigText()}
        {renderParagraph()}
        {renderLink()}
      </ContentWrapper>
    </BlockWrapper>
  );
};

export default TextBlock;

const BlockWrapper = styled.div`
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

const ContentWrapper = styled.div`
  margin: auto;
  margin-top: 20vh;
  padding: 0 ${(props) => (props.hasParagraph ? "24%" : "0")};
`;

const StyledParagraph = styled.p`
  font-size: 1.0625rem;
  font-family: Maison Neue Light;
  line-height: 1.8125rem;
  margin-bottom: 2.5rem;
`;

const StyledLink = styled(Link)`
  color: ${colors.GOLD};
  font-size: 1.125rem;
  font-family: Maison Neue Demi;
  margin-top: 2rem;
`;
