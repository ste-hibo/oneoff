export const getTextWithoutParagraph = (text) =>{
  const matchParagraph = /<\/?[p>]+(>|$)/g
  return text.replace(matchParagraph, "");
}