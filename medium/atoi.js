/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  if(parseInt(s, 10) < Math.pow(-2,31)){
    return Math.pow(-2,31);
  }else if(parseInt(s, 10) > Math.pow(2,31)-1){
    return Math.pow(2,31)-1;
  }else{
    return isNaN(parseInt(s, 10)) ? 0 : parseInt(s, 10);
  }
};

