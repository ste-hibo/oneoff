import React from "react";
import { connect, styled } from "frontity";
import { colors, calcLineThroughHeight } from "../styles";
import LinkComponent from "@frontity/components/link";
import { CameraIcon } from "./icons";

const ExperienceDetail = ({ state }) => {
  const data = state.source.get(state.router.link);
  const page = state.source[data.type][data.id];
  const media = state.source.attachment[page.featured_media];
  const {
    acf: { gallery },
    content,
    title,
  } = page;

  const linkText = "See the Gallery";

  const renderContent = () => {
    return (
      <ContentWrapper>
        <StyledTitle>{title.rendered}</StyledTitle>
        <StyledParagraph
          dangerouslySetInnerHTML={{ __html: content.rendered }}
        ></StyledParagraph>
        <StyledLink link={""}>
          <CameraIcon />
          {linkText}
        </StyledLink>
      </ContentWrapper>
    );
  };

  return (
    <Container>
      {renderContent()}
      <StyledImage src={media.source_url} />
    </Container>
  );
};

export default connect(ExperienceDetail);

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  color: ${colors.WHITE};
`;

const StyledImage = styled.img`
  width: 49vw;
  object-fit: cover;
  padding-right: 10vw;
  transform: translateY(-8.5rem);
`;

const ContentWrapper = styled.div`
  margin: auto;
  padding: 0 9vw;
`;

const StyledTitle = styled.div`
  font-family: Circular Std;
  font-size: 3.8125rem;
`;

const StyledParagraph = styled.div`
  font-family: Maison Neue Light;
  font-size: 1.0625rem;
  line-height: 1.8;
  margin: 1.8rem 0;
`;

const linkColor = colors.GOLD;
const linkFontSize = "1.125rem";
const StyledLink = styled(LinkComponent)`
  color: ${linkColor};
  outline: 0;
  padding: 1.2rem 0;
  font-size: ${linkFontSize};
  font-family: Circular Book;

  &::after {
    background-color: ${linkColor};
    height: ${calcLineThroughHeight(linkFontSize)};
  }

  svg {
    margin-right: 0.625rem;
  }
`;
