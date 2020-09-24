import React, { useEffect, useState } from "react";
import { Global, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import Loading from "./loading";
import Title from "./title";
import Page from "./page";
import Experiences from "./experiences";
import PageError from "./page-error";
import Menu from "./menu";
import BottomLinks from "./bottom-links";
import ProgressBar from "./progress-bar";
import { globalStyles } from "../styles.js";
import MenuModal from "./menu-modal";

let scrollPos = 0;
let isScrolling = false;

const Theme = ({ actions, state }) => {
  const { menuIsOpening, menuIsClosing } = state.theme;
  const menuOn = menuIsOpening && !menuIsClosing;

  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  const SPEED = 90;
  const SMOOTH = 12;

  const [scrollTarget, setScrollTarget] = useState(null);

  useEffect(() => {
    setScrollTarget(document.body.parentNode);
  }, []);

  useEffect(() => {
    if (!scrollTarget) return;

    scrollTo(0);

    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [scrollTarget]);

  useEffect(() => {
    scrollTo(state.theme.scrollTo);
  }, [state.theme.updateScrollPos]);

  const scrollTo = (value) => {
    if (!scrollTarget) return;

    const position = percentToScrollPosition(value);
    const delta = 0;

    scrollPos = position;
    calculateScrollPos(delta);
    if (!isScrolling) {
      updateScrollPosition();
    }
  };

  const percentToScrollPosition = (value) => {
    const position =
      ((scrollTarget.scrollWidth - scrollTarget.offsetWidth) * value) / 100;
    return position;
  };

  const handleScroll = (e) => {
    if (!scrollTarget || state.theme.menuIsOpening) return;

    e.preventDefault();

    // smooth scroll
    let delta;
    if (e.detail) {
      if (e.wheelDelta)
        delta = (e.wheelDelta / e.detail / 40) * (e.detail > 0 ? 1 : -1);
      else delta = -e.detail / 3;
    } else {
      delta = e.wheelDelta / 120;
    }

    calculateScrollPos(delta);
    if (!isScrolling) {
      updateScrollPosition();
    }
  };

  const calculateScrollPos = (delta) => {
    scrollPos += -delta * SPEED;
    scrollPos = Math.max(
      0,
      Math.min(scrollPos, scrollTarget.scrollWidth - scrollTarget.clientWidth)
    );

    const percent =
      (scrollPos * 100) / (scrollTarget.scrollWidth - scrollTarget.offsetWidth);

    actions.theme.setScrollProgress({
      percent: percent.toFixed(2),
      value: scrollPos,
    });
  };

  const updateScrollPosition = () => {
    if (!scrollTarget) return;

    isScrolling = true;

    const delta = (scrollPos - scrollTarget.scrollLeft) / SMOOTH;

    scrollTarget.scrollLeft += delta;

    if (Math.abs(delta) > 0) {
      window.requestAnimationFrame(updateScrollPosition);
    } else {
      isScrolling = false;
    }
  };

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />

      {/* Add the header of the site. */}
      <HeadContainer menuOn={menuOn}>
        <Header />
        <Menu />
      </HeadContainer>

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <>
        <OuterWrapper>
          <Wrapper>
            <Switch>
              <Loading when={data.isFetching} />
              <Experiences when={data.isExperiences || data.isExperienceArchive } />
              <Page when={data.isPage} />
              <PageError when={data.isError} />
            </Switch>
          </Wrapper>
        </OuterWrapper>
        <BottomLinks />
        <ProgressBar />
      </>

      {menuIsOpening ? <MenuModal /> : null}

      {state.theme.testing ? (
        <div
          style={{
            color: "white",
            mixBlendMode: "difference",
            position: "fixed",
            top: 0,
            left: 0,
            opacity: 0.25,
            padding: 5,
          }}
        >
          {`${state.theme.scrollProgress.percent}% | ${state.theme.scrollProgress.value}`}
        </div>
      ) : null}
    </>
  );
};

export default connect(Theme);

const HeadContainer = styled.div`
  position: absolute;
  z-index: ${(props) => (props.menuOn ? "10" : "auto")};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
`;

const OuterWrapper = styled.div`
  width: auto;
  height: 100vw;
  position: absolute;
  z-index: -10;
`;
