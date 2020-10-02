import Theme from "./components";
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import { TIMEOUTS } from "./configs";

const oneoffTheme = {
  name: "@frontity/oneoff-theme",
  roots: {
    /**
     *  In Frontity, any package can add React components to the site.
     *  We use roots for that, scoped to the `theme` namespace.
     */
    theme: Theme,
  },
  state: {
    /**
     * State is where the packages store their default settings and other
     * relevant state. It is scoped to the `theme` namespace.
     */
    theme: {
      menu: [],
      isMenuOpen: false,
      menuIsClosing: false,
      menuIsOpening: false,
      isGalleryOpen: false,
      galleryIsClosing: false,
      galleryIsOpening: false,
      scrollProgress: { percent: 0, value: 0 },
      scrollTo: 0,
      updateScrollPos: false,
      featured: {
        showOnList: false,
        showOnPost: false,
      },
      testing: true,
    },
  },
  /**
   * Actions are functions that modify the state or deal with other parts of
   * Frontity like libraries.
   */
  actions: {
    theme: {
      openMenu: ({ state, actions }) => {
        state.theme.menuIsOpening = true;
        setTimeout(() => {
          actions.theme.setMenuOpen();
        }, TIMEOUTS.MENU_OPEN);
      },
      setMenuOpen: ({ state }) => {
        state.theme.isMenuOpen = true;
      },
      closeMenu: ({ state, actions }) => {
        state.theme.menuIsClosing = true;
        setTimeout(() => {
          actions.theme.setMenuClose();
        }, TIMEOUTS.MENU_CLOSE);
      },
      setMenuClose: ({ state }) => {
        state.theme.isMenuOpen = false;
        state.theme.menuIsClosing = false;
        state.theme.menuIsOpening = false;
      },
      openGallery: ({ state, actions }) => {
        state.theme.galleryIsOpening = true;
        setTimeout(() => {
          actions.theme.setGalleryOpen();
        }, TIMEOUTS.GALLERY_OPEN);
      },
      setGalleryOpen: ({ state }) => {
        state.theme.isGalleryOpen = true;
      },
      closeGallery: ({ state, actions }) => {
        state.theme.galleryIsClosing = true;
        setTimeout(() => {
          actions.theme.setGalleryClose();
        }, TIMEOUTS.GALLERY_CLOSE);
      },
      setGalleryClose: ({ state }) => {
        state.theme.isGalleryOpen = false;
        state.theme.galleryIsClosing = false;
        state.theme.galleryIsOpening = false;
      },
      setScrollProgress: ({ state }) => (value) => {
        state.theme.scrollProgress = value;
      },
      scrollTo: ({ state }) => (value) => {
        state.theme.scrollTo = value;
        state.theme.updateScrollPos = true;
        setInterval(() => {
          state.theme.updateScrollPos = false;
        }, 1000);
      },
      /*
       * use beforeSSR to pre-fetch the contact page
       * content and add it to the state so we can use
       * it in a component
       */
      beforeSSR: async ({ actions }) => {
        await actions.source.fetch("/contacts");
      },
    },
  },
  libraries: {
    html2react: {
      /**
       * Add a processor to `html2react` so it processes the `<img>` tags
       * inside the content HTML. You can add your own processors too
       */
      processors: [image, iframe],
    },
  },
};

export default oneoffTheme;
