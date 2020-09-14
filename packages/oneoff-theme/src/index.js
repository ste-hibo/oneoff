import Theme from "./components";
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";

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
      scrollProgress: 0,
      featured: {
        showOnList: false,
        showOnPost: false,
      },
    },
  },
  /**
   * Actions are functions that modify the state or deal with other parts of
   * Frontity like libraries.
   */
  actions: {
    theme: {
      openMenu: ({ state }) => {
        state.theme.menuIsOpening = true;
      },
      setMenuOpen: ({ state }) => {
        state.theme.isMenuOpen = true;
      },
      closeMenu: ({ state }) => {
        state.theme.menuIsClosing = true;
      },
      setMenuClose: ({ state }) => {
        state.theme.isMenuOpen = false;
        state.theme.menuIsClosing = false;
        state.theme.menuIsOpening = false;
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
