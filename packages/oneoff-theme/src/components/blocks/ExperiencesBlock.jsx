import React, { useEffect, useState } from "react";
import { connect, styled } from "frontity";
import Experience from "../Experience";

const ExperiencesBlock = ({ state, actions, data: { elements }, id }) => {
  const [data, setData] = useState();
  const [source, setSource] = useState();

  useEffect(() => {
    const fetchData = async () => {
      await actions.source.fetch(`/${elements}`);
      const _data = state.source.get(`/${elements}`);
      setData(_data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!data) return;

    const _source = state.source[data.type];
    setSource(_source);
  }, [data])

  const getItemsSortedByMenuOrder = (items) => {
    return items.sort((itemA, itemB) => {
      const exp_dataA = source[itemA.id];
      const exp_dataB = source[itemB.id];

      return exp_dataA.menu_order - exp_dataB.menu_order;
    });
  };

  const renderExperiences = () => {
    if (!source) return;

    const sortedItems = getItemsSortedByMenuOrder(data.items);

    return sortedItems.map((exp, i) => {
      const exp_data = source[exp.id];
      const media = state.source.attachment[exp_data.featured_media];

      return (
        <Experience
          key={exp.id}
          index={i}
          data={exp_data}
          featured_media={media}
        />
      );
    });
  };

  return <BlockWrapper id={id}>{renderExperiences()}</BlockWrapper>;
};

export default connect(ExperiencesBlock);

const BlockWrapper = styled.div`
  position: relative;
  width: 161.2vw;
  height: 100vh;
  display: flex;
`;
