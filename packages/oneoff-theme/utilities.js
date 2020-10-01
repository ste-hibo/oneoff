export const getTextWithoutParagraph = (text) => {
  const matchParagraph = /<\/?[p>]+(>|$)/g;
  return text.replace(matchParagraph, "");
};

export const checkIfUseAlternateColors = (state, altColorThreshold) => {
  const { scrollProgress } = state.theme;
  const data = state.source.get(state.router.link);

  const result =
    !data.isPage ||
    data.route === "/contacts/" ||
    scrollProgress.percent < altColorThreshold;

  return result;
};
