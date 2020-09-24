import React from "react";
import { connect } from "frontity";
import Slider from "./blocks/Slider";
import StickyPanel from "./blocks/StickyPanel";
import TextBlock from "./blocks/TextBlock";
import ImageBlock from "./blocks/ImageBlock";
import ImagesTypeA from "./blocks/ImagesTypeA";
import ImagesTypeB from "./blocks/ImagesTypeB";
import ExperiencesBlock from "./blocks/ExperiencesBlock";

const Page = ({ state }) => {
  const data = state.source.get(state.router.link);
  const page = state.source[data.type][data.id];
  const blocks = page.acf ? page.acf.blocks : [];

  const createSingleBlock = (block, i) => {
    const layout = block.acf_fc_layout;
    const id = `${layout}_${i}`;

    switch (layout) {
      case "slider":
        return <Slider key={`${layout}_${i}`} id={id} data={block} />;

      case "sticky_panel":
        return <StickyPanel key={`${layout}_${i}`} id={id} data={block} />;

      case "text_block":
        return <TextBlock key={`${layout}_${i}`} id={id} data={block} />;

      case "image_block":
        return <ImageBlock key={`${layout}_${i}`} id={id} data={block} />;

      case "big_words":
      // return bigWordsBlock(block);

      case "contact_panel":
      // return contactPanel(block);

      case "images_type_a":
        return <ImagesTypeA key={`${layout}_${i}`} id={id} data={block} />;

      case "images_type_b":
        return <ImagesTypeB key={`${layout}_${i}`} id={id} data={block} />;

      case "experiences_block":
        return <ExperiencesBlock key={`${layout}_${i}`} id={id} data={block} />;

      default:
      // return <div key={`${layout}_${i}`}>This block is not configured yet.</div>;
    }
  };

  const renderBlocks = () => {
    return blocks.map(createSingleBlock);
  };

  return blocks ? (
    renderBlocks()
  ) : (
    <>
      <h1>{page.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.content.rendered }}></div>
    </>
  );
};

export default connect(Page);
