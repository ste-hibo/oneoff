import React from "react";
import { styled } from "frontity";
import { colors } from "../../styles";

// Renders 2 images in a custom way.
const ImagesTypeB = ({ data, id }) => {
  const {
    content: { row_1, row_2, row_3 },
    images: { img1, img2 },
  } = data;
  const rows = [row_1, row_2, row_3];

  const renderContent = () => {
    return rows
      ? rows.map((row) => {
          return <span dangerouslySetInnerHTML={{ __html: row }}></span>;
        })
      : null;
  };

  return (
    <BlockWrapper id={id}>
      <ContentWrapper>
        <div>{renderContent()}</div>
        <img src={img1.url} />
        <img src={img2.url} />
      </ContentWrapper>
    </BlockWrapper>
  );
};

export default ImagesTypeB;

const BlockWrapper = styled.div`
  display: flex;
  position: relative;
  width: 76vw;
  height: 100vh;
  background-color: ${colors.WHITE};
  justify-content: center;
  align-items: center;
  z-index: 0;

  img {
    object-fit: cover;
    position: absolute;
    z-index: -1;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 70%;
  height: 70%;
  font-family: Circular Std Book;
  font-size: 4.375vw;
  text-align: center;

  span:nth-of-type(2) {
    p {
      padding-left: 24rem;
    }
  }

  span:nth-of-type(3) {
    p {
      padding-left: 6rem;
    }
  }

  img {
    width: 16.75rem;
    height: auto;
  }

  img:nth-of-type(1) {
    bottom: 0;
    left: 0;
  }

  img:nth-of-type(2) {
    top: 0;
    right: 0;
  }
`;
