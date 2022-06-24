/**
 * @param {string} sentence
 * @return {number}
 */
var countValidWords = function(sentence) {
  return sentence.trim().split(/\s+/g).filter(str => {
    return str.match(/^([a-z]+(-[a-z]+)?)?[!\.,]?$/);
  }).length;


};
