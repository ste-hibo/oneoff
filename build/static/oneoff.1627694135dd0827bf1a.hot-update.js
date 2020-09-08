webpackHotUpdate("oneoff",{

/***/ "./packages/oneoff-theme/src/components/title.js":
/*!*******************************************************!*\
  !*** ./packages/oneoff-theme/src/components/title.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nvar Title=(_ref)=>{var{state}=_ref;// Get data about the current URL.\nvar data=state.source.get(state.router.link);// Set the default title.\nvar title=state.frontity.title;if(data.isTaxonomy){// Add titles to taxonomies, like \"Category: Nature - Blog Name\" or \"Tag: Japan - Blog Name\".\n// 1. Get the taxonomy entity from the state to get its taxonomy term and name.\nvar{taxonomy,name}=state.source[data.taxonomy][data.id];// 2. Uppercase first letter of the taxonomy term (from \"category\" to \"Category\").\nvar taxonomyCapitalized=taxonomy.charAt(0).toUpperCase()+taxonomy.slice(1);// 3. Render the proper title.\ntitle=\"\".concat(taxonomyCapitalized,\": \").concat(Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"decode\"])(name),\" - \").concat(state.frontity.title);}else if(data.isAuthor){// Add titles to authors, like \"Author: Jon Snow - Blog Name\".\n// 1. Get the author entity from the state to get its name.\nvar{name:_name}=state.source.author[data.id];// 2. Render the proper title.\ntitle=\"Author: \".concat(Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"decode\"])(_name),\" - \").concat(state.frontity.title);}else if(data.isPostType){// Add titles to posts and pages, using the title and ending with the Blog Name.\n// 1. Get the post entity from the state and get its title.\nvar postTitle=state.source[data.type][data.id].title.rendered;// 2. Remove any HTML tags found in the title.\nvar cleanTitle=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"decode\"])(postTitle);// 3. Render the proper title.\ntitle=\"\".concat(cleanTitle,\" - \").concat(state.frontity.title);}else if(data.is404){// Add titles to 404's.\ntitle=\"404 Not Found - \".concat(state.frontity.title);}return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(frontity__WEBPACK_IMPORTED_MODULE_1__[\"Head\"],null);};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(Title));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9vbmVvZmYtdGhlbWUvc3JjL2NvbXBvbmVudHMvdGl0bGUuanM/ZjE1YSJdLCJuYW1lcyI6WyJUaXRsZSIsInN0YXRlIiwiZGF0YSIsInNvdXJjZSIsImdldCIsInJvdXRlciIsImxpbmsiLCJ0aXRsZSIsImZyb250aXR5IiwiaXNUYXhvbm9teSIsInRheG9ub215IiwibmFtZSIsImlkIiwidGF4b25vbXlDYXBpdGFsaXplZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJkZWNvZGUiLCJpc0F1dGhvciIsImF1dGhvciIsImlzUG9zdFR5cGUiLCJwb3N0VGl0bGUiLCJ0eXBlIiwicmVuZGVyZWQiLCJjbGVhblRpdGxlIiwiaXM0MDQiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQSxHQUFNQSxNQUFLLENBQUcsUUFBZSxJQUFkLENBQUVDLEtBQUYsQ0FBYyxNQUMzQjtBQUNBLEdBQU1DLEtBQUksQ0FBR0QsS0FBSyxDQUFDRSxNQUFOLENBQWFDLEdBQWIsQ0FBaUJILEtBQUssQ0FBQ0ksTUFBTixDQUFhQyxJQUE5QixDQUFiLENBQ0E7QUFDQSxHQUFJQyxNQUFLLENBQUdOLEtBQUssQ0FBQ08sUUFBTixDQUFlRCxLQUEzQixDQUVBLEdBQUlMLElBQUksQ0FBQ08sVUFBVCxDQUFxQixDQUNuQjtBQUNBO0FBQ0EsR0FBTSxDQUFFQyxRQUFGLENBQVlDLElBQVosRUFBcUJWLEtBQUssQ0FBQ0UsTUFBTixDQUFhRCxJQUFJLENBQUNRLFFBQWxCLEVBQTRCUixJQUFJLENBQUNVLEVBQWpDLENBQTNCLENBQ0E7QUFDQSxHQUFNQyxvQkFBbUIsQ0FDdkJILFFBQVEsQ0FBQ0ksTUFBVCxDQUFnQixDQUFoQixFQUFtQkMsV0FBbkIsR0FBbUNMLFFBQVEsQ0FBQ00sS0FBVCxDQUFlLENBQWYsQ0FEckMsQ0FFQTtBQUNBVCxLQUFLLFdBQU1NLG1CQUFOLGNBQThCSSx1REFBTSxDQUFDTixJQUFELENBQXBDLGVBQWdEVixLQUFLLENBQUNPLFFBQU4sQ0FBZUQsS0FBL0QsQ0FBTCxDQUNELENBVEQsSUFTTyxJQUFJTCxJQUFJLENBQUNnQixRQUFULENBQW1CLENBQ3hCO0FBQ0E7QUFDQSxHQUFNLENBQUVQLElBQUksQ0FBSkEsS0FBRixFQUFXVixLQUFLLENBQUNFLE1BQU4sQ0FBYWdCLE1BQWIsQ0FBb0JqQixJQUFJLENBQUNVLEVBQXpCLENBQWpCLENBQ0E7QUFDQUwsS0FBSyxtQkFBY1UsdURBQU0sQ0FBQ04sS0FBRCxDQUFwQixlQUFnQ1YsS0FBSyxDQUFDTyxRQUFOLENBQWVELEtBQS9DLENBQUwsQ0FDRCxDQU5NLElBTUEsSUFBSUwsSUFBSSxDQUFDa0IsVUFBVCxDQUFxQixDQUMxQjtBQUNBO0FBQ0EsR0FBTUMsVUFBUyxDQUFHcEIsS0FBSyxDQUFDRSxNQUFOLENBQWFELElBQUksQ0FBQ29CLElBQWxCLEVBQXdCcEIsSUFBSSxDQUFDVSxFQUE3QixFQUFpQ0wsS0FBakMsQ0FBdUNnQixRQUF6RCxDQUNBO0FBQ0EsR0FBTUMsV0FBVSxDQUFHUCx1REFBTSxDQUFDSSxTQUFELENBQXpCLENBQ0E7QUFDQWQsS0FBSyxXQUFNaUIsVUFBTixlQUFzQnZCLEtBQUssQ0FBQ08sUUFBTixDQUFlRCxLQUFyQyxDQUFMLENBQ0QsQ0FSTSxJQVFBLElBQUlMLElBQUksQ0FBQ3VCLEtBQVQsQ0FBZ0IsQ0FDckI7QUFDQWxCLEtBQUssMkJBQXNCTixLQUFLLENBQUNPLFFBQU4sQ0FBZUQsS0FBckMsQ0FBTCxDQUNELENBRUQsTUFDRSwyREFBQyw2Q0FBRCxNQURGLENBS0QsQ0F2Q0QsQ0F5Q2VtQix1SEFBTyxDQUFDMUIsS0FBRCxDQUF0QiIsImZpbGUiOiIuL3BhY2thZ2VzL29uZW9mZi10aGVtZS9zcmMvY29tcG9uZW50cy90aXRsZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEhlYWQsIGNvbm5lY3QsIGRlY29kZSB9IGZyb20gXCJmcm9udGl0eVwiO1xuXG5jb25zdCBUaXRsZSA9ICh7IHN0YXRlIH0pID0+IHtcbiAgLy8gR2V0IGRhdGEgYWJvdXQgdGhlIGN1cnJlbnQgVVJMLlxuICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG4gIC8vIFNldCB0aGUgZGVmYXVsdCB0aXRsZS5cbiAgbGV0IHRpdGxlID0gc3RhdGUuZnJvbnRpdHkudGl0bGU7XG5cbiAgaWYgKGRhdGEuaXNUYXhvbm9teSkge1xuICAgIC8vIEFkZCB0aXRsZXMgdG8gdGF4b25vbWllcywgbGlrZSBcIkNhdGVnb3J5OiBOYXR1cmUgLSBCbG9nIE5hbWVcIiBvciBcIlRhZzogSmFwYW4gLSBCbG9nIE5hbWVcIi5cbiAgICAvLyAxLiBHZXQgdGhlIHRheG9ub215IGVudGl0eSBmcm9tIHRoZSBzdGF0ZSB0byBnZXQgaXRzIHRheG9ub215IHRlcm0gYW5kIG5hbWUuXG4gICAgY29uc3QgeyB0YXhvbm9teSwgbmFtZSB9ID0gc3RhdGUuc291cmNlW2RhdGEudGF4b25vbXldW2RhdGEuaWRdO1xuICAgIC8vIDIuIFVwcGVyY2FzZSBmaXJzdCBsZXR0ZXIgb2YgdGhlIHRheG9ub215IHRlcm0gKGZyb20gXCJjYXRlZ29yeVwiIHRvIFwiQ2F0ZWdvcnlcIikuXG4gICAgY29uc3QgdGF4b25vbXlDYXBpdGFsaXplZCA9XG4gICAgICB0YXhvbm9teS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRheG9ub215LnNsaWNlKDEpO1xuICAgIC8vIDMuIFJlbmRlciB0aGUgcHJvcGVyIHRpdGxlLlxuICAgIHRpdGxlID0gYCR7dGF4b25vbXlDYXBpdGFsaXplZH06ICR7ZGVjb2RlKG5hbWUpfSAtICR7c3RhdGUuZnJvbnRpdHkudGl0bGV9YDtcbiAgfSBlbHNlIGlmIChkYXRhLmlzQXV0aG9yKSB7XG4gICAgLy8gQWRkIHRpdGxlcyB0byBhdXRob3JzLCBsaWtlIFwiQXV0aG9yOiBKb24gU25vdyAtIEJsb2cgTmFtZVwiLlxuICAgIC8vIDEuIEdldCB0aGUgYXV0aG9yIGVudGl0eSBmcm9tIHRoZSBzdGF0ZSB0byBnZXQgaXRzIG5hbWUuXG4gICAgY29uc3QgeyBuYW1lIH0gPSBzdGF0ZS5zb3VyY2UuYXV0aG9yW2RhdGEuaWRdO1xuICAgIC8vIDIuIFJlbmRlciB0aGUgcHJvcGVyIHRpdGxlLlxuICAgIHRpdGxlID0gYEF1dGhvcjogJHtkZWNvZGUobmFtZSl9IC0gJHtzdGF0ZS5mcm9udGl0eS50aXRsZX1gO1xuICB9IGVsc2UgaWYgKGRhdGEuaXNQb3N0VHlwZSkge1xuICAgIC8vIEFkZCB0aXRsZXMgdG8gcG9zdHMgYW5kIHBhZ2VzLCB1c2luZyB0aGUgdGl0bGUgYW5kIGVuZGluZyB3aXRoIHRoZSBCbG9nIE5hbWUuXG4gICAgLy8gMS4gR2V0IHRoZSBwb3N0IGVudGl0eSBmcm9tIHRoZSBzdGF0ZSBhbmQgZ2V0IGl0cyB0aXRsZS5cbiAgICBjb25zdCBwb3N0VGl0bGUgPSBzdGF0ZS5zb3VyY2VbZGF0YS50eXBlXVtkYXRhLmlkXS50aXRsZS5yZW5kZXJlZDtcbiAgICAvLyAyLiBSZW1vdmUgYW55IEhUTUwgdGFncyBmb3VuZCBpbiB0aGUgdGl0bGUuXG4gICAgY29uc3QgY2xlYW5UaXRsZSA9IGRlY29kZShwb3N0VGl0bGUpO1xuICAgIC8vIDMuIFJlbmRlciB0aGUgcHJvcGVyIHRpdGxlLlxuICAgIHRpdGxlID0gYCR7Y2xlYW5UaXRsZX0gLSAke3N0YXRlLmZyb250aXR5LnRpdGxlfWA7XG4gIH0gZWxzZSBpZiAoZGF0YS5pczQwNCkge1xuICAgIC8vIEFkZCB0aXRsZXMgdG8gNDA0J3MuXG4gICAgdGl0bGUgPSBgNDA0IE5vdCBGb3VuZCAtICR7c3RhdGUuZnJvbnRpdHkudGl0bGV9YDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEhlYWQ+XG4gICAgICB7LyogPHRpdGxlPnt0aXRsZX08L3RpdGxlPiAqL31cbiAgICA8L0hlYWQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFRpdGxlKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/oneoff-theme/src/components/title.js\n");

/***/ })

})