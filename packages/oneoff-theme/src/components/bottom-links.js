import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import { colors, calcLineThroughHeight } from "../styles.js";
import { checkIfUseAlternateColors } from "../../utilities";

const BottomLinks = ({ state }) => {
  const { bottomLinks } = state.theme;

  const altColorThreshold = 86.25;
  const linksColor = checkIfUseAlternateColors(state, altColorThreshold)
    ? colors.GOLD
    : colors.WHITE;

  return (
    <LinksContainer>
      <LinksWrapper>
        {bottomLinks.map(([name, link]) => {
          return (
            <StyledLink key={name} link={link} color={linksColor}>
              {name}
            </StyledLink>
          );
        })}
      </LinksWrapper>
    </LinksContainer>
  );
};

export default connect(BottomLinks);

const linkFontSize = "1.1875rem";
const StyledLink = styled(Link)`
  font-size: ${linkFontSize};
  color: ${(props) => props.color};
  transition: color 0.5s;

  &::after {
    background-color: ${(props) => props.color};
    height: ${calcLineThroughHeight(linkFontSize)};
  }
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  position: fixed;
  bottom: 0;
  z-index: -1;
`;

const LinksWrapper = styled.div`
  margin-top: auto;
  font-family: Circular Book;
  padding: 3.75rem 5rem;
  padding-top: 0;
  display: flex;
  justify-content: space-between;
`;
