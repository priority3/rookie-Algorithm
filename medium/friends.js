/**
 * @param {number[]} ages
 * @return {number}
 */

var numFriendRequests = function(ages) {
  const n = ages.length;
  ages.sort((a, b) => a - b);
  let left = 0, right = 0, ans = 0;
  for (const age of ages) {
      if (age < 15) {
          continue;
      }
      while (ages[left] <= 0.5 * age + 7) {
          ++left;
      }
      while (right  < n && ages[right] <= age) {
          ++right;
      }
      
      ans += right - left - 1;
  }
  return ans;
};


console.log(numFriendRequests([16,17,18]));