/**
 * @param {string} num
 * @return {boolean}
 */

// err
var isAdditiveNumber = function(num) {
  const match = (l,m,r) => {
    if(r>num.length || m > num.length-1 || (num[l] === '0' && m-l>1 )) return false;
    if(m >= r) return match(l,m,r+1);
    
    if(num[m] === '0' && r-m > 1) return match(l,m+1,r);
    const n3 = `${+num.slice(l, m) + +num.slice(m, r)}`;
    
    if (n3.length > num.length - r) return false;
    if(num.slice(r,r+n3.length) === n3 && (r+n3.length === num.length ||  match(m, r, r + n3.length))){
      return true;
    }
    return match(l,m,r+1) || match(l,m+1,r)
  }
  return match(0,1,2)
};
console.log(isAdditiveNumber("112358"));

