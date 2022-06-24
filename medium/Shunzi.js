/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
  var isNStraightHand = function(hand, groupSize) {
    hand.sort(function(a, b) {return a-b});
    let count = 0;
    hand.reduce((pre,cur) => {
      if(cur == pre && count <= groupSize) {

      }
    })
};