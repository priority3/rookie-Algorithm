/**
 * @param {number[][]} questions
 * @return {number}
 */
// var mostPoints = function(questions) {
//   let max = 0;

//   for(let j = 0; j < questions.length; j++) {
//     let curscore = 0;
//     for (let i = j; i < questions.length; i+=questions[i][1]+1) {
//       curscore += questions[i][0];
//     }
//     max = Math.max(max, curscore);
//   }
//   return max;
// };
// ----------------------------------------------------------------
var mostPoints = function(q) {
  const n = q.length;
  const dp = new Array(n + 1).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    // max( 不做这题，做下一题所得的分 ， 做这题+做下一跳题所得的分 )
      dp[i] = Math.max(dp[i + 1], q[i][0] + dp[Math.min(i + q[i][1] + 1, n)]);
  }
  return dp[0];
};

console.log(mostPoints([[21,5],[92,3],[74,2],[39,4],[58,2],[5,5],[49,4],[65,3]]));