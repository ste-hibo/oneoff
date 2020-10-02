import React from "react";
import { styled } from "frontity";
import { colors } from "../styles";

const Bubble = ({ data }) => {
  const { title, image, content } = data;

  return !content ? (
    <StyledBubble1 image={image}>
      <label>{title}</label>
    </StyledBubble1>
  ) : (
    <StyledBubble2 image={image}>
      <img src={image.url} />
      <ContentWrapper>
        <label>{title}</label>
        <StyledContent
          dangerouslySetInnerHTML={{ __html: content }}
        ></StyledContent>
      </ContentWrapper>
    </StyledBubble2>
  );
};

export default Bubble;

const StyledBubble1 = styled.div`
  position: relative;
  width: 11vw;
  height: 11vw;
  border: 1px solid ${colors.DARK_GREY};
  border-radius: 100%;
  background: url("${(props) => props.image.url}") no-repeat center;
  margin: 0 1.625rem;

  label {
    position: absolute;
    width: 100%;
    top: 12vw;
    text-align: center;
    font-family: Maison Neue Light;
    font-size: 1.0625rem;
  }
`;

const StyledBubble2 = styled.div`
  position: relative;
  display: -webkit-box;

  img {
    height: 3rem;
    object-fit: scale-down;
  }
`;

const ContentWrapper = styled.div`
  width: max-content;
  margin-left: 1rem;

  label {
    width: 100%;
    font-family: Maison Neue Book;
    font-size: 1.0625rem;
  }
`;

const StyledContent = styled.div`
  font-family: Maison Neue Light;
  font-size: 0.875rem;
`;
