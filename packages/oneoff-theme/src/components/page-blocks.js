import React, { useState } from "react";
import { connect, styled } from "frontity";
import { HorizontalScrollView } from "rc-horizontal-scroll";

const Page = ({ state }) => {
  const data = state.source.get(state.router.link);
  const page = state.source[data.type][data.id];

  const getSliderImages = () => {
    if (page.acf && page.acf.main_slider) {
      return page.acf.main_slider.map((img) => {
        return img.url;
      });
    }

    return [];
  };

  const sliderImages = getSliderImages();

  const generateBlocks = () => [
    {
      id: "1_" + Date.now(),
      image: "https://picsum.photos/200/300",
      slider: sliderImages,
    },
    {
      id: "2_" + Date.now(),
      image: "https://picsum.photos/200/300",
      slider: sliderImages,
    },
    {
      id: "3_" + Date.now(),
      image: "https://picsum.photos/200/300",
      title: "Bellaaaaaaaaa",
      slider: sliderImages,
    },
  ];

  const [blocks, setBlocks] = useState(generateBlocks());
  return (
    <HorizontalScrollView
      uniqueProp="id"
      items={blocks}
      ItemComponent={Block}
      itemComponentProps={{}}
      onLastItemReached={(page) => {
        console.log(page);
      }}
      defaultSpace="0px"
      spaceBetweenItems="0px"
      moveSpeed={1}
    />
  );

  // return (
  //   <div>
  //     {/* <h2>{page.title.rendered}</h2> */}
  //     {/* <div dangerouslySetInnerHTML={{ __html: page.content.rendered }}></div> */}
  //     <BgImage src={images[0]}/>
  //   </div>
  // );
};

/**
 * item -> The item data
 * parentProps -> the props passed in "itemComponentProps"
 * index -> the index of the item
 */
const Block = ({ item, parentProps, index }) => {
  const title = item.title ? (
    <div className="content">
      <h4>{item.title + (index + 1)}</h4>
    </div>
  ) : null;

  const createSlider = item.slider ? (
    <SliderContainer>
      {item.slider.map((slide) => {
        return <BgImage key={slide} src={slide} />;
      })}
    </SliderContainer>
  ) : null;

  return (
    <>
      {createSlider}
      {title}
    </>
  );
};

export default connect(Page);

const BgImage = styled.img`
  height: auto;
  width: 100%;
`;

const SliderContainer = styled.div`
  height: 100vh;
  width: 100vw;
`;
