import React from "react";
import { connect, styled } from "frontity";
import { colors } from "../../styles";
import Link from "../link";

const PERCENT_TOLLERANCE = 2;

const StickyPanel = ({ actions, state, data, id }) => {
  const { content, sections } = data;

  let activeOnReaching = sections.map((section) => section.value - PERCENT_TOLLERANCE);
  activeOnReaching.push(100);

  const drawSections = () => {
    const { scrollProgress } = state.theme;

    return sections
      ? sections.map((section, i) => {
          const isActive =
            scrollProgress.percent > activeOnReaching[i] &&
            scrollProgress.percent <= activeOnReaching[i + 1]
              ? "true"
              : "";

          return (
            <StyledLink
              key={`${section.text}_${section.value}`}
              aria-current={isActive}
              onClick={() => {
                actions.theme.scrollTo(section.value);
              }}
            >
              {section.text}
            </StyledLink>
          );
        })
      : null;
  };

  return (
    <PanelStyled id={id}>
      <ContentWrapper>
        <SectionsStyled>{drawSections()}</SectionsStyled>
        <TextStyled dangerouslySetInnerHTML={{ __html: content }}></TextStyled>
      </ContentWrapper>
    </PanelStyled>
  );
};

export default connect(StickyPanel);

const StyledLink = styled(Link)`
  color: transparent;
  -webkit-text-stroke: 1px ${colors.WHITE}61;
  transition: color 0.5s;
  cursor: pointer;

  &[aria-current="true"] {
    color: ${colors.GOLD};
  }

  &:hover {
    color: ${colors.GOLD};
  }

  &:visited {
    -webkit-text-stroke: 1px ${colors.WHITE}61;
  }
`;

const SectionsStyled = styled.div`
  font-size: 6.25rem;
  font-family: Circular Bold;
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  padding: 25% 10rem 25% 5.2rem;
`;

const PanelStyled = styled.div`
  position: sticky;
  left: 0;
  width: 36vw;
  height: 100vh;
  background-color: ${colors.BLACK};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const TextStyled = styled.div`
  font-size: 1.0625rem;
  font-family: Maison Neue Light;
  color: ${colors.WHITE};
`;
