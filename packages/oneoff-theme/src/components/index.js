import React, { useEffect, useState } from "react";
import { Global, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import Loading from "./loading";
import Title from "./title";
import Page from "./page";
import PageError from "./page-error";
import Menu from "./menu";
import BottomLinks from "./bottom-links";
import ProgressBar from "./progress-bar";
import { globalStyles } from "../styles.js";
import MenuModal from "./menu-modal";

let scrollPos = 0;
let moving = false;

const Theme = ({ state }) => {
  const { menuIsOpening, menuIsClosing } = state.theme;
  const menuOn = menuIsOpening && !menuIsClosing;

  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  const SPEED = 90;
  const SMOOTH = 12;

  const [scrollTarget, setScrollTarget] = useState(null);
  const [scrollProgress, setScrollProgress] = useState({
    percent: 0,
    value: 0,
  });

  useEffect(() => {
    setScrollTarget(document.body.parentNode);
  }, []);

  useEffect(() => {
    if (!scrollTarget) return;

    scrollToStart();

    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [scrollTarget]);

  useEffect(() => {
    state.theme.scrollProgress = scrollProgress;
  }, [scrollProgress]);

  const scrollToStart = () => {
    scrollPos = 0;
    calculateScrollPos(0);
    window.requestAnimationFrame(updateScrollPosition);
  };

  const handleScroll = (e) => {
    if (!scrollTarget || state.theme.menuIsOpening) return;

    e.preventDefault();

    // SMOOTH scroll
    let delta;
    if (e.detail) {
      if (e.wheelDelta)
        delta = (e.wheelDelta / e.detail / 40) * (e.detail > 0 ? 1 : -1);
      else delta = -e.detail / 3;
    } else {
      delta = e.wheelDelta / 120;
    }

    calculateScrollPos(delta);

    if (!moving) {
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
    setScrollProgress({ percent: percent, value: scrollPos });
  };

  const updateScrollPosition = () => {
    if (!scrollTarget) return;

    moving = true;

    const delta = (scrollPos - scrollTarget.scrollLeft) / SMOOTH;

    scrollTarget.scrollLeft += delta;

    if (Math.abs(delta) > 0) {
      window.requestAnimationFrame(updateScrollPosition);
    } else {
      moving = false;
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
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <Page when={data.isPage} />
          <PageError when={data.isError} />
        </Switch>
        <BottomLinks />
        <ProgressBar />
      </Main>

      {menuIsOpening ? <MenuModal /> : null}
    </>
  );
};

export default connect(Theme);

const HeadContainer = styled.div`
  position: absolute;
  z-index: ${(props) => props.menuOn ? "10" : "auto"};
`;

const Main = styled.div``;
