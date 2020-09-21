import React from "react";
import { connect } from "frontity";
import Slider from "./blocks/Slider";
import StickyPanel from "./blocks/StickyPanel";
import TextAndImages from "./blocks/TextAndImages";

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

      case "text":
      // return textBlock(block);

      case "big_words":
      // return bigWordsBlock(block);

      case "contact_panel":
      // return contactPanel(block);

      case "text_and_images":
        return <TextAndImages key={`${layout}_${i}`} id={id} data={block} />;

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
