/**
 * @param {number} num
 * @return {boolean}
 */
  var checkPerfectNumber = function(num) {
    let arr = [];
    for(let i = 1 ; i < num ; i++){
      if(isFactorNumber(i,num)){
        arr.push(i);
      }
    }
    let sum = arr.reduce((pre,cur) => pre+cur,0);
    return sum===num;

};


const isFactorNumber = (num,realNum) => {
  if(realNum % num === 0){
    return true;
  }else{
    return false;
  }
}

