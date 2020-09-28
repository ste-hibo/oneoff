import React from "react";
import { styled } from "frontity";
import { colors } from "../styles";
import LinkComponent from "@frontity/components/link";

const Experience = ({ index, isLast, altStyle, data, featured_media }) => {
  const {
    title,
    link,
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
    <ExperienceWrapper
      className={isLast ? "last-exp" : ""}
      data-altstyle={altStyle}
      link={link}
    >
      <MediaStyled
        className="exp-image"
        data-altstyle={altStyle}
        imgUrl={source_url}
      />
      <TitleWrapper data-altstyle={altStyle}>
        <IndexStyled>{renderIndex()}</IndexStyled>
        <TitleStyled>{title.rendered}</TitleStyled>
      </TitleWrapper>
    </ExperienceWrapper>
  );
};

export default Experience;

const altStyles = {
  experienceWrapper: `
  margin: 0;
  padding: 0;
  margin-right: 6.25rem;
  `,
  mediaStyled: `
  width: 40.125rem;
  height: 90vh;
  `,
  titleWrapper: `
  left: -3rem;
  `,
};

const ExperienceWrapper = styled(LinkComponent)`
  margin: auto;
  padding-left: 18.2rem;
  position: relative;

  ${(props) => (props["data-altstyle"] ? altStyles.experienceWrapper : "")}

  &.last-exp {
    padding-right: 5rem;
  }

  &:hover {
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

  ${(props) => (props["data-altstyle"] ? altStyles.mediaStyled : "")}
`;

const TitleWrapper = styled.div`
  position: absolute;
  left: 9.5rem;
  bottom: 6rem;
  display: flex;
  flex-direction: column;

  ${(props) => (props["data-altstyle"] ? altStyles.titleWrapper : "")}
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
