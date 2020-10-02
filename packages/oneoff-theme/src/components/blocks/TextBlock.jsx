import React from "react";
import { styled } from "frontity";
import { colors, calcLineThroughHeight } from "../../styles";
import Link from "../link";
import Bubble from "../Bubble";
import { getTextWithoutParagraph } from "../../../utilities";

const TextBlock = ({ data, id, prevBlock }) => {
  const {
    title,
    big_text,
    content,
    link,
    bubbles,
    width,
    background_color,
  } = data;

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

  const renderBubbles = () => {
    return bubbles ? (
      <BubblesWrapper>
        {bubbles.map((bubble) => {
          return <Bubble data={bubble} />;
        })}
      </BubblesWrapper>
    ) : null;
  };

  const checkIfAddLeftPadding = () => {
    return prevBlock.acf_fc_layout === "images_type_a"
      ? "padding-left: 8vw"
      : "";
  };

  return (
    <BlockWrapper width={width} backgroundColor={background_color} id={id}>
      <ContentWrapper leftPadding={checkIfAddLeftPadding}>
        {renderTitle()}
        {renderBigText()}
        {renderParagraph()}
        {renderLink()}
        {renderBubbles()}
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
  margin-left: 8vw;
  margin-right: 8vw;
  margin-top: 20vh;
  ${(props) => props.leftPadding};
`;

const StyledParagraph = styled.p`
  font-size: 1.0625rem;
  font-family: Maison Neue Light;
  line-height: 1.8125rem;
  margin-bottom: 2.5rem;
`;

const linkFontSize = "1.125rem";
const StyledLink = styled(Link)`
  color: ${colors.GOLD};
  font-size: ${linkFontSize};
  font-family: Maison Neue Demi;
  margin-top: 2rem;

  &::after {
    background-color: ${colors.GOLD};
    height: ${calcLineThroughHeight(linkFontSize)};
  }
`;

const BubblesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 4rem;
  margin-top: 3rem;
`;