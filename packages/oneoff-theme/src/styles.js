import { css } from "frontity";
import CircularLight  from "../fonts/circular-air-light.ttf";
import CircularStd    from "../fonts/circular-std-medium.ttf";
import CircularBlack  from "../fonts/circular-std-black.ttf";
import CircularBook   from "../fonts/circular-std-book.ttf";
import CircularBold   from "../fonts/circular-std-bold.ttf";

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
body {
  overflow-y: hidden;
  margin: 0;
  font-family: Circular Std, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
}
a,
a:visited {
  text-decoration: none;
}
::-webkit-scrollbar {
  display:none;
}
`;

export const colors = {
  GOLD: "#B48E70",
  GOLD_DARKER: "#ba835f",
  WHITE: "#fff",
  MENU_BACKGROUND: "#000",
  BLACK: "#000",
}