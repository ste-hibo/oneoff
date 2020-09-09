import React, { useState, useEffect, useRef } from "react";
import { connect, styled } from "frontity";

const Page = ({ state }) => {
  const [offsetX, setoffsetX] = useState(0);
  const outerWrapper = useRef(null);

  const handleScroll = (ev) => {
    console.log(outerWrapper.current.scrollTop);
    setoffsetX(outerWrapper.current.pageXOffset);
  }

  useEffect(() => {
    outerWrapper.current.addEventListener("scroll", handleScroll);
    return () => {
      outerWrapper.current.removeEventListener("scroll", handleScroll);
    }
  }, [outerWrapper])

  useEffect(() => {
    console.log(offsetX);
  }, [offsetX])

  const data = state.source.get(state.router.link);
  const page = state.source[data.type][data.id];

  return (
    <OuterWrapper ref={outerWrapper}>
      <Wrapper>
        <Slide></Slide>
      </Wrapper>
    </OuterWrapper>
  );
};

export default connect(Page);

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("http://oneoff.7frwk6ymb9-ewx3lz9el4zq.p.runcloud.link/wp-content/uploads/2020/09/Mask-Group-1.png");
  background-size: auto 100vh;
  background-repeat: repeat-x;
  width: 400vw;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 400vw;
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
  z-index: 0
`;
