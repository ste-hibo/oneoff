import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import { colors } from "../styles.js";

const BottomLinks = ({ state }) => {
  const links = state.theme.bottomLinks;

  return (
    <LinksContainer>
      <LinksWrapper>
        {links.map((link, i) => {
          return (
            <GoldenLink style={{}} link={link[1]}>
              {link[0]}
            </GoldenLink>
          );
        })}
      </LinksWrapper>
    </LinksContainer>
  );
};

export default connect(BottomLinks);

const GoldenLink = styled(Link)`
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  position: absolute;
  pointer-events: none;
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
