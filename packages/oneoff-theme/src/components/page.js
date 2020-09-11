import React, { useState, useEffect, useRef } from "react";
import { connect, styled } from "frontity";
import Slider from "./blocks/Slider";

const Page = ({ state }) => {
  const [scrollTop, setScrollTop] = useState(0);
  const outerWrapper = useRef(null);

  const data = state.source.get(state.router.link);
  const page = state.source[data.type][data.id];
  const blocks = page.acf ? page.acf.blocks : [];

  const handleScroll = (ev) => {
    setScrollTop(outerWrapper.current.scrollTop);
  };

  useEffect(() => {
    if (outerWrapper.current) {
      outerWrapper.current.addEventListener("scroll", handleScroll, true);
    }
    return () => {
      if (outerWrapper.current) {
        outerWrapper.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [outerWrapper]);

  // useEffect(() => {
  //   console.log(scrollTop);
  // }, [scrollTop]);

  const createSingleBlock = (block, i) => {
    const layout = block.acf_fc_layout;

    switch (layout) {
      case "slider":
        return <Slider key={`${layout}_${i}`} data={block}></Slider>;

      case "wcee_panel":
        return wceePanel(block);

      case "text":
        return textBlock(block);

      case "big_words":
        return bigWordsBlock(block);

      case "contact_panel":
        return contactPanel(block);

      case "text_and_images":
        return textAndImagesBlock(block);

      default:
        return <div>This block is not configured yet.</div>;
    }
  };

  const renderBlocks = () => {
    return blocks.map(createSingleBlock);
  };

  return blocks ? (
    <OuterWrapper ref={outerWrapper}>
      <Wrapper blocks={blocks}>{renderBlocks()}</Wrapper>
    </OuterWrapper>
  ) : (
    <>
      <h1>{page.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.content.rendered }}></div>
    </>
  );
};

export default connect(Page);

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: ${(props) => props.blocks.length * 100}vw;
  transform: rotate(90deg) translateY(-100vh);
  transform-origin: top left;
`;

const OuterWrapper = styled.div`
  width: 100vh;
  height: 100vw;
  transform: rotate(-90deg) translateX(-100vh);
  transform-origin: top left;
  overflow-y: scroll;
  overflow-x: hidden;
  position: absolute;
  scrollbar-width: none;
  -ms-overflow-style: none;
  z-index: -10;
`;
