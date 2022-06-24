/**
 * @param {string[]} bank
 * @return {number}
 */
 var numberOfBeams = function(bank) {

  let pre= 0;
  let cur = 0;
  let all = 0;
  for(let i = 0; i < bank.length; i++) {
    for(let j = 0; j < bank[0].length; j++){
      if(bank[i][j]=== '1'){
        cur++;
      }

    }
    all += pre*cur;
    if(cur !== 0){
      pre = cur;
    }
    cur = 0;
  }
  return all;
};

console.log(numberOfBeams(["011001","000000","010100","001000"]));