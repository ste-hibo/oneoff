import React, { useEffect, useState } from "react";
import { connect, styled } from "frontity";
import Experience from "../Experience";
import LinkComponent from "@frontity/components/link";
import { colors } from "../../styles";

const ExperiencesBlock = ({ state, actions, data: { elements, link }, id }) => {
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
  }, [data]);

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
      // const isLast = sortedItems.length === i + 1;

      return (
        <Experience
          key={exp.id}
          index={i}
          isLast={false}
          data={exp_data}
          featured_media={media}
          altStyle={true}
        />
      );
    });
  };

  const renderViewAllLink = () => {
    return link ? (
      <LinkWrapper>
        <StyledViewAllLink link={link.url}>{link.title}</StyledViewAllLink>
      </LinkWrapper>
    ) : null;
  };

  return (
    <BlockWrapper id={id}>
      {renderExperiences()}
      {renderViewAllLink()}
    </BlockWrapper>
  );
};

export default connect(ExperiencesBlock);

const BlockWrapper = styled.div`
  position: relative;
  width: fit-content;
  height: 100vh;
  display: flex;
`;

const LinkWrapper = styled.div`
  width: 50vw;
  margin: auto;
  display: flex;
  justify-content: center;
  background-color: ${colors.BLACK};
`;

const StyledViewAllLink = styled(LinkComponent)`
  position: relative;
  font-family: Maison Neue Book;
  font-size: 1.75rem;
  color: ${colors.WHITE};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1px;
  height: 1px;

  &::after {
    border: 1px solid ${colors.WHITE};
    content: "";
    position: absolute;
    width: 67vh;
    height: 67vh;
    border-radius: 67vh;
  }

  &::before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-radius: 67vh;
    background-color: ${colors.WHITE};
    transition: all .5s ease-in-out;
    mix-blend-mode: difference;
  }

  &:hover {
    text-decoration: none;

    ::after {
    }

    ::before {
      width: 67vh;
      height: 67vh;
    }
  }
`;
