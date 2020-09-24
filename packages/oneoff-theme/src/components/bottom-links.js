import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import { colors } from "../styles.js";

const BottomLinks = ({ state }) => {
  const links = state.theme.bottomLinks;

  return (
    <LinksContainer>
      <LinksWrapper>
        {links.map(([name, link]) => {
          return (
            <GoldenLink key={name} link={link}>
              {name}
            </GoldenLink>
          );
        })}
      </LinksWrapper>
    </LinksContainer>
  );
};

export default connect(BottomLinks);

const GoldenLink = styled(Link)`
  color: ${colors.GOLD};

  &:hover,
  &:focus {
    text-decoration: line-through;
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
  font-size: 1.1875rem;
  color: ${colors.GOLD};
  font-family: Circular Book;
  padding: 3.75rem 5rem;
  display: flex;
  justify-content: space-between;
`;
