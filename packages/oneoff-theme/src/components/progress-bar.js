import React from "react";
import { connect, styled } from "frontity";
import { colors } from "../styles.js";

const ProgressBar = ({ state }) => {
  return (
    <BarContainer>
      <BarStyled width={state.theme.scrollProgress} />
    </BarContainer>
  );
};

export default connect(ProgressBar);

const BarContainer = styled.div`
  position: absolute;
  bottom: 0;
`;

const BarStyled = styled.div`
  height: 0.4375rem;
  width: ${(props) => props.width}vw;
  background-color: ${colors.GOLD};
`;
