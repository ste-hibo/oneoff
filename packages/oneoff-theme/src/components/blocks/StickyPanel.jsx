import React from "react";
import { connect, styled } from "frontity";
import { colors } from "../../styles";
import Link from "../link";

const StickyPanel = ({ state, data }) => {
  const { content, sections } = data;

  const activeOnReaching = [
    72.2, 75, 79, 82, 100
  ]

  const drawSections = () => {
    const { scrollProgress } = state.theme;

    return sections
      ? sections.map((section, i) => {
        const isActive =
          scrollProgress.percent >= activeOnReaching[i] &&
          scrollProgress.percent < activeOnReaching[i + 1]
            ? "true"
            : "";

          return (
            <StyledLink
              key={section.link.title}
              aria-current={isActive}
              link={section.link.url}
            >
              {section.link.title}
            </StyledLink>
          );
        })
      : null;
  };

  return (
    <>
      <PanelStyled>
        <ContentWrapper>
          <SectionsStyled>{drawSections()}</SectionsStyled>
          <TextStyled dangerouslySetInnerHTML={{ __html: content }}></TextStyled>
        </ContentWrapper>
      </PanelStyled>
    </>
  );
};

export default connect(StickyPanel);

const StyledLink = styled(Link)`
  color: transparent;
  -webkit-text-stroke: 1px ${colors.WHITE}61;
  transition: color 0.5s;

  &[aria-current="true"] {
    color: ${colors.GOLD};
  }

  &:hover,
  &:focus {
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
`;

const TextStyled = styled.div`
  font-size: 1.0625rem;
  font-family: Maison Neue Light;
  color: ${colors.WHITE};
`;
