import { css } from "frontity";
import CircularLight  from "../fonts/circular-air-light.ttf";
import CircularStd    from "../fonts/circular-std-medium.ttf";
import CircularBlack  from "../fonts/circular-std-black.ttf";
import CircularBook   from "../fonts/circular-std-book.ttf";
import CircularBold   from "../fonts/circular-std-bold.ttf";
import MaisonNeueBook   from "../fonts/maison-neue-book.ttf";
import MaisonNeueLight   from "../fonts/maison-neue-light.ttf";

export const colors = {
  GOLD: "#b48e70",
  GOLD_DARKER: "#ba835f",
  WHITE: "#ffffff",
  MENU_BACKGROUND: "#000000",
  BLACK: "#000000",
}

export const globalStyles = css`
@font-face {
  font-family: "Circular Air";
  font-style: normal;
  font-weight: normal;
  font-display: fallback;
  src: url("${CircularLight}") format("truetype");
}
@font-face {
  font-family: "Circular Std";
  font-style: normal;
  font-weight: normal;
  font-display: fallback;
  src: url("${CircularStd}") format("truetype");
}
@font-face {
  font-family: "Circular Black";
  font-style: normal;
  font-weight: normal;
  font-display: fallback;
  src: url("${CircularBlack}") format("truetype");
}
@font-face {
  font-family: "Circular Book";
  font-style: normal;
  font-weight: normal;
  font-display: fallback;
  src: url("${CircularBook}") format("truetype");
}
@font-face {
  font-family: "Circular Bold";
  font-style: normal;
  font-weight: normal;
  font-display: fallback;
  src: url("${CircularBold}") format("truetype");
}
@font-face {
  font-family: "Maison Neue Book";
  font-style: normal;
  font-weight: normal;
  font-display: fallback;
  src: url("${MaisonNeueBook}") format("truetype");
}
@font-face {
  font-family: "Maison Neue Light";
  font-style: normal;
  font-weight: normal;
  font-display: fallback;
  src: url("${MaisonNeueLight}") format("truetype");
}
body {
  overflow-y: hidden;
  color: ${colors.BLACK};
  margin: 0;
  font-family: Circular Std, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
}
a,
a:visited {
  color: inherit;
  text-decoration: none;
}
::-webkit-scrollbar {
  display:none;
}
`;