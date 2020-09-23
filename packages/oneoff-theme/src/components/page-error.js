import React from "react";
import { styled, connect } from "frontity";
import { colors } from "../styles";

const Page404 = ({ state }) => {
  const data = state.source.get(state.router.link);

  const title404 = "Oops! 404";
  const description404 = (
    <>
      That page can’t be found{" "}
      <span role="img" aria-label="confused face">
        😕
      </span>
    </>
  );

  return (
    <Container>
      <Title>{data.is404 ? title404 : ""}</Title>
      <Description>{data.is404 ? description404 : ""}</Description>
    </Container>
  );
};

export default connect(Page404);

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Title = styled.h1`
  margin: 0;
  margin-top: 24px;
  margin-bottom: 8px;
  color: ${colors.WHITE};
  font-size: 4em;
`;

const Description = styled.div`
  line-height: 1.6em;
  color: ${colors.WHITE};
  margin: 24px 0;
`;
