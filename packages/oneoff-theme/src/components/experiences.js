import React from "react";
import { connect, styled } from "frontity";
import Experience from "./Experience";

const Experiences = ({ state }) => {
  const data = state.source.get(state.router.link);
  const source = state.source[data.type];

  const getItemsSortedByMenuOrder = (items) => {
    return items.sort((itemA, itemB) => {
      const exp_dataA = source[itemA.id];
      const exp_dataB = source[itemB.id];

      return exp_dataA.menu_order - exp_dataB.menu_order;
    });
  };

  const renderExperiences = () => {
    const sortedItems = getItemsSortedByMenuOrder(data.items);

    return sortedItems.map((exp, i) => {
      const exp_data = source[exp.id];
      const media = state.source.attachment[exp_data.featured_media];
      const isLast = sortedItems.length === i + 1;

      return (
        <Experience
          key={exp.id}
          index={i}
          isLast={isLast}
          data={exp_data}
          featured_media={media}
        />
      );
    });
  };

  return <Container>{renderExperiences()}</Container>;
};

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export default connect(Experiences);
