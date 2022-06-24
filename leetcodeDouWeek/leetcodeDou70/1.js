/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(cost) {
  cost.sort((a,b) => a-b)
  let count = 0;
  for(let i = cost.length - 1; i >= 0 ; i--){
    if(i >= 2){
      count+=cost[i];
      count+=cost[i-1];
      i-=2;
      continue;
    }
    if(i === 1){
      count+=cost[i];
      count+=cost[i-1];
      break;
    }
    if(i === 0){
      count += cost[i];
    }

  }
  return count;
};