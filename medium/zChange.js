/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
  var convert = function(s, numRows) {
    if(numRows === 1) return s;
    let a = new Array(numRows);
    for(let i = 0; i < numRows; i++){
      a[i] = "";
    }
    let currow = 0;
    let flag = false;
    for (let i = 0; i < s.length; i++) {
      a[currow] += s[i];
      if(currow === 0 || currow === numRows - 1) {
        flag = !flag;
      }
      currow += flag ? 1 : -1;
    }
    let res = "";
    for (let i = 0; i < numRows ; i++){
      res += a[i];
    }
    
    return res
};
console.log(convert("ab",1));
