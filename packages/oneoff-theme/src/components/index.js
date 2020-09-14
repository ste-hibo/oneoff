import React from "react";
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

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

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
      <HeadContainer>
        <Header />
        <Menu/>
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
    </>
  );
};

export default connect(Theme);

const HeadContainer = styled.div``;

const Main = styled.div``;
