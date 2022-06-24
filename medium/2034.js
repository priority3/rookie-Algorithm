var StockPrice = function() {
  this.timeArr=[];
  this.priceArr=[];
};

/** 
 * @param {number} timestamp 
 * @param {number} price
 * @return {void}
 */
StockPrice.prototype.update = function(timestamp, price) {
  let timeArr = this.timeArr
  let priceArr = this.priceArr
  let index = this.timeArr.indexOf(timestamp);
  if(index !== -1){
    timeArr.push(timestamp);
    priceArr.push(price);
  }else{
    priceArr[index] = price;
  }
};

/**
 * @return {number}
 */
StockPrice.prototype.current = function() {
  return this.priceArr[this.priceArr.length - 1];
};

/**
 * @return {number}
 */
StockPrice.prototype.maximum = function() {
  return Math.max(...this.priceArr);
};

/**
 * @return {number}
 */
StockPrice.prototype.minimum = function() {
  return Math.min(...this.priceArr)
};

/**
 * Your StockPrice object will be instantiated and called as such:
 * var obj = new StockPrice()
 * obj.update(timestamp,price)
 * var param_2 = obj.current()
 * var param_3 = obj.maximum()
 * var param_4 = obj.minimum()
 */