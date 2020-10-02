import React from "react";
import { styled } from "frontity";
import { colors } from "../../styles";

const ListBlock = ({ data, id }) => {
  const { text, items } = data;

  const renderText = () => {
    return <StyledText>{text}</StyledText>;
  };

  const renderListItems = () => {
    return (
      <StyledList>
        {items.map((item) => {
          return <li>{item.name}</li>;
        })}
      </StyledList>
    );
  };

  return (
    <BlockWrapper id={id}>
      {renderText()}
      {renderListItems()}
    </BlockWrapper>
  );
};

export default ListBlock;

const BlockWrapper = styled.div`
  width: 33vw;
  height: 100vh;
  background-color: ${colors.LIGHT_GREY};
  font-family: Maison Neue Book;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledText = styled.div`
  font-size: 1.75rem;
  margin-left: -3rem;
`;

const StyledList = styled.ul`
  font-size: 2.625rem;
  margin-left: 3vw;
  list-style: none;

  li {
    margin-bottom: 1rem;
    position: relative;

    &::before {
      position: absolute;
      content: "■";
      color: ${colors.GOLD};
      margin-left: -1em;
      font-size: 1.2rem;
      top: 1rem;
      left: -0.5rem;
    }
  }
`;
