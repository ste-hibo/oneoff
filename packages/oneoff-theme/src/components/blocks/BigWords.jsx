import React from "react";
import { styled } from "frontity";
import { colors } from "../../styles";

const BigWords = ({ data, id }) => {
  const { title, words } = data;

  const renderTitle = () => {
    return <StyledTitle>{title}</StyledTitle>;
  };

  const renderWords = () => {
    return words.map((word) => {
      return <StyledWord>{word.word}</StyledWord>;
    });
  };

  return (
    <BlockWrapper id={id}>
      {renderTitle()}
      <WordsWrapper>{renderWords()}</WordsWrapper>
    </BlockWrapper>
  );
};

export default BigWords;

const BlockWrapper = styled.div`
  width: 103.65vw;
  height: 100vh;
  background-color: ${colors.WHITE};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 5.5rem;
`;

const StyledTitle = styled.div`
  font-family: Maison Neue Book;
  font-size: 1.75rem;
  padding-left: 4.5rem;
`;

const WordsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledWord = styled.h2`
  font-family: Circular Bold;
  font-size: 4.74vw;
  line-height: 1;
  padding: 2.25rem 4.5rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    border: 2px solid ${colors.GOLD};
    height: 70%;
    top: 2.5vh;
    margin-left: 4.5rem;
  }
`;
