/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
  let res = title.split(' ').map((item => {
    let str = item.toLowerCase();
    if(str.length <= 2){
      return str;
    }else{
      str = str[0].toUpperCase()+str.substring(1)
      return str;
    }
    
  }))
  return res.join(" ")
};
