import React from "react";
import { styled } from "frontity";
import { colors } from "../styles";

const Experience = ({ index, data, featured_media }) => {
  const {
    acf: { gallery },
    content,
    title,
  } = data;
  const { source_url } = featured_media;

  const renderIndex = () => {
    let shownIndex = index + 1;
    if (shownIndex < 10) {
      shownIndex = shownIndex.toString().replace(/^/, "0");
    }

    return shownIndex;
  };

  return (
    <ExperienceWrapper>
      <MediaStyled className="exp-image" imgUrl={source_url} />;
      <TitleWrapper>
        <IndexStyled>{renderIndex()}</IndexStyled>
        <TitleStyled>{title.rendered}</TitleStyled>
      </TitleWrapper>
    </ExperienceWrapper>
  );
};

export default Experience;

const ExperienceWrapper = styled.div`
  margin: auto;
  padding-left: 18.2rem;
  position: relative;

  &:hover {
    cursor: pointer;

    .exp-image {
      background-size: 150%;
    }
  }
`;

const MediaStyled = styled.div`
  width: 28.5rem;
  height: 37.31rem;
  background: url(${(props) => props.imgUrl}) center no-repeat;
  background-size: 130%;
  transition: background 0.5s ease;
`;

const TitleWrapper = styled.div`
  position: absolute;
  left: 9.5rem;
  bottom: 6rem;
  display: flex;
  flex-direction: column;
`;

const IndexStyled = styled.span`
  color: ${colors.GOLD};
  font-size: 0.9375rem;
  font-family: Maison Neue Book;
  margin-bottom: 1rem;
`;

const TitleStyled = styled.span`
  color: ${colors.WHITE};
  font-size: 3.8125rem;
  font-family: Circular Std;
  width: 29rem;
  line-height: 1.1;
`;
