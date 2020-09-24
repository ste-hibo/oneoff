import { css } from "frontity";
import CircularLight  from "../fonts/circular-air-light.ttf";
import CircularStd    from "../fonts/circular-std-medium.ttf";
import CircularBlack  from "../fonts/circular-std-black.ttf";
import CircularBook   from "../fonts/circular-std-book.ttf";
import CircularBold   from "../fonts/circular-std-bold.ttf";
import MaisonNeueBook   from "../fonts/maison-neue-book.ttf";
import MaisonNeueLight   from "../fonts/maison-neue-light.ttf";
import MaisonNeueDemi   from "../fonts/maison-neue-demi.ttf";

export const colors = {
  GOLD: "#b48e70",
  GOLD_DARKER: "#ba835f",
  WHITE: "#ffffff",
  BLACK: "#000000",
  PRIMARY: "#000000",
  SECONDARY: "#4C4C4C",
  MENU_BACKGROUND: "#000000",
  SLIDER_GRADIENT: "#131313",
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
@font-face {
  font-family: "Maison Neue Demi";
  font-style: normal;
  font-weight: normal;
  font-display: fallback;
  src: url("${MaisonNeueDemi}") format("truetype");
}

html, body, div, span, h1, h2, h3, h4, h5, h6, p {  
  margin: 0;  
  padding: 0;  
  border: 0;  
  font-size: 100%;  
  font: inherit;  
  vertical-align: baseline; 
}
body {
  overflow-y: hidden;
  color: ${colors.PRIMARY};
  background-color: ${colors.BLACK};
  font-family: Circular Std, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
}
a,
a:visited {
  text-decoration: none;
}
a {
  &:hover,
  &:focus {
    text-decoration: line-through;
  }
}
::-webkit-scrollbar {
  display:none;
}
`;