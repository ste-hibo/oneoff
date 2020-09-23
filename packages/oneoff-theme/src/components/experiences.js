import React from "react";
import { connect, styled } from "frontity";
import { colors } from "../styles";

const Showcase = ({ state }) => {
  const data = state.source.get(state.router.link);

  const renderExperiences = () => {
    return data.items.map((experience) => {
      const exp_data = state.source[data.type][experience.id];
      console.log(exp_data);

      return <div key={experience.id}>{experience.id}</div>;
    });
  };

  return <Container>{renderExperiences()}</Container>;
};

const Container = styled.div`
  color: ${colors.WHITE};
`;

export default connect(Showcase);
