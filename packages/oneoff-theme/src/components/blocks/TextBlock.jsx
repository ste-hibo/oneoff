import React from "react";
import { styled } from "frontity";
import { colors } from "../../styles";

const TextBlock = ({ data, id }) => {
  const { title, big_text, content, background_color } = data;

  return (
    <ContentWrapper backgroundColor={background_color} id={id}>
      <Content>
        <TitleStyled>{title}</TitleStyled>
        <BigTextStyled dangerouslySetInnerHTML={{ __html: big_text }}></BigTextStyled>
        <TextStyled>{content}</TextStyled>
      </Content>
    </ContentWrapper>
  );
};

export default TextBlock;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 63vw;
  height: 100vh;
  background-color: ${(props) =>
    props.backgroundColor === "white" ? colors.WHITE : colors.BLACK};
`;

const Content = styled.div`
  margin: auto;
  padding: 0 17rem;
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

const TextStyled = styled.div`
  font-size: 1.0625rem;
  font-family: Maison Neue Light;
  line-height: 1.8125rem;
`;
