import React from "react";
import { connect, styled } from "frontity";
import { colors } from "../styles.js";

const ProgressBar = ({ state }) => {
  const { scrollProgress } = state.theme;

  return (
    <BarContainer>
      <BarStyled width={scrollProgress.percent} />
    </BarContainer>
  );
};

export default connect(ProgressBar);

const BarContainer = styled.div`
  position: fixed;
  bottom: 0;
  z-index: -1;
`;

const BarStyled = styled.div`
  transition: width .5s ease-in-out;
  height: 0.4375rem;
  width: ${(props) => props.width}vw;
  background-color: ${colors.GOLD};
`;
