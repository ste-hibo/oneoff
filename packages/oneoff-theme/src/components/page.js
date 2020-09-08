import React from "react";
import { connect, styled } from "frontity";

const Page = ({ state }) => {
  const data = state.source.get(state.router.link);
  const page = state.source[data.type][data.id];
  const images = [
    page.acf.main_slider[0].url
  ]

  return (
    <div>
      {/* <h2>{page.title.rendered}</h2> */}
      {/* <div dangerouslySetInnerHTML={{ __html: page.content.rendered }}></div> */}
      <BgImage src={images[0]}/>
    </div>
  );
};

export default connect(Page);

const BgImage = styled.img`
  width: 100%;
`;
