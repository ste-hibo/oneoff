import React from "react";
import { styled } from "frontity";
import { colors, calcLineThroughHeight } from "../../styles";
import Link from "../link";
import Bubble from "../Bubble";
import { getTextWithoutParagraph } from "../../../utilities";
import { LAYOUTS } from "../../configs";

const TextBlock = ({ data, id, prevBlock }) => {
  const {
    title,
    big_text,
    content,
    link,
    bubbles,
    image,
    image_custom_style,
    width,
    background_color,
    paragraph_columns,
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
    return content ? (
      <StyledParagraph columns={paragraph_columns}>{content}</StyledParagraph>
    ) : null;
  };

  const renderLink = () => {
    return link ? <StyledLink link={link.url}>{link.title}</StyledLink> : null;
  };

  const renderBubbles = () => {
    const bubblesHaveContent =
      bubbles && bubbles.some((bubble) => bubble.content);

    return bubbles ? (
      <BubblesWrapper haveContent={bubblesHaveContent}>
        {bubbles.map((bubble) => {
          return <Bubble key={bubble.title} data={bubble} />;
        })}
      </BubblesWrapper>
    ) : null;
  };

  const renderImage = () => {
    return image ? (
      <StyledImage src={image.url} customStyle={image_custom_style} />
    ) : null;
  };

  const checkIfAddLeftPadding = () => {
    return prevBlock.acf_fc_layout === LAYOUTS.IMAGES_A
      ? "padding-left: 8vw"
      : "";
  };

  return (
    <BlockWrapper
      width={width}
      backgroundColor={background_color}
      hasImage={image}
      id={id}
    >
      <ContentWrapper leftPadding={checkIfAddLeftPadding}>
        {renderTitle()}
        {renderBigText()}
        {renderParagraph()}
        {renderLink()}
        {renderBubbles()}
        {renderImage()}
      </ContentWrapper>
    </BlockWrapper>
  );
};

export default TextBlock;

const BlockWrapper = styled.div`
  position: ${(props) => (props.hasImage ? "relative" : "unset")};
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width}vw;
  height: 100vh;
  background-color: ${(props) =>
    props.backgroundColor === "white" ? colors.WHITE : colors.BLACK};
  z-index: 0;

  h1 {
    width: 100vw;
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

  column-count: ${(props) => props.columns};
  column-gap: 2rem;
  ${(props) => (props.columns > 1 ? "width: 75%" : "")};
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
  justify-content: ${(props) =>
    props.haveContent ? "space-between" : "flex-end"};
  margin-right: 4rem;
  margin-top: 3rem;
`;

const StyledImage = styled.img`
  position: absolute;
  bottom: 6rem;
  right: 10vw;
  z-index: -1;
  ${(props) => props.customStyle}
`;
