/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
  const n = releaseTimes.length;
  let ans = keysPressed[0];
  let maxTime = releaseTimes[0];
  for (let i = 1; i < n; i++) {
      const key = keysPressed[i];
      const time = releaseTimes[i] - releaseTimes[i - 1];
      if (time > maxTime || (time === maxTime && key > ans)) {
          ans = key;
          maxTime = time;
      }
  }
  return ans;
};


console.log(slowestKey([12,23,36,46,62],"spuda"));
