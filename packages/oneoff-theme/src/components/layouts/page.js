import React from "react";
import { connect } from "frontity";
import Slider from "../blocks/Slider";
import StickyPanel from "../blocks/StickyPanel";
import TextBlock from "../blocks/TextBlock";
import ImageBlock from "../blocks/ImageBlock";
import ImagesTypeA from "../blocks/ImagesTypeA";
import ImagesTypeB from "../blocks/ImagesTypeB";
import ExperiencesBlock from "../blocks/ExperiencesBlock";
import ContactsBlock from "../blocks/ContactsBlock";
import BigWords from "../blocks/BigWords";
import ListBlock from "../blocks/ListBlock";
import { LAYOUTS } from "../../configs";

const Page = ({ state }) => {
  const data = state.source.get(state.router.link);
  const page = state.source[data.type][data.id];
  const blocks = page.acf ? page.acf.blocks : [];

  const createSingleBlock = (block, i) => {
    const layout = block.acf_fc_layout;
    const id = `${layout}_${i}`;

    switch (layout) {
      case LAYOUTS.SLIDER:
        return <Slider key={`${layout}_${i}`} id={id} data={block} />;

      case LAYOUTS.STICKY_PANEL:
        return <StickyPanel key={`${layout}_${i}`} id={id} data={block} />;

      case LAYOUTS.TEXT_BLOCK:
        return (
          <TextBlock
            key={`${layout}_${i}`}
            id={id}
            data={block}
            prevBlock={blocks[i - 1]}
          />
        );

      case LAYOUTS.IMAGE_BLOCK:
        return <ImageBlock key={`${layout}_${i}`} id={id} data={block} />;

      case LAYOUTS.BIG_WORDS:
        return <BigWords key={`${layout}_${i}`} id={id} data={block} />;

      case LAYOUTS.IMAGES_A:
        return <ImagesTypeA key={`${layout}_${i}`} id={id} data={block} />;

      case LAYOUTS.IMAGES_B:
        return <ImagesTypeB key={`${layout}_${i}`} id={id} data={block} />;

      case LAYOUTS.EXPERIENCES_BLOCK:
        return <ExperiencesBlock key={`${layout}_${i}`} id={id} data={block} />;

      case LAYOUTS.LIST_BLOCK:
        return <ListBlock key={`${layout}_${i}`} id={id} data={block} />;

      default:
        return null;
    }
  };

  const renderBlocks = () => {
    return blocks.map(createSingleBlock);
  };

  const renderContactsBlock = () => {
    return <ContactsBlock />;
  };

  return blocks ? (
    <>
      {renderBlocks()}
      {renderContactsBlock()}
    </>
  ) : (
    <>
      <h1>{page.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.content.rendered }}></div>
    </>
  );
};

export default connect(Page);
