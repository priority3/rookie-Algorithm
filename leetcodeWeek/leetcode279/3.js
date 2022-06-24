/**
 * @param {number} size
 */
var Bitset = function (size) {
  this.prototype.str = ''
  while (size > 0) {
    this.prototype.str += 0
    size--
  }
}

/**
 * @param {number} idx
 * @return {void}
 */
Bitset.prototype.fix = function (idx) {
  this.str[idx] = '1'
}

/**
 * @param {number} idx
 * @return {void}
 */
Bitset.prototype.unfix = function (idx) {
  this.str[idx] = '0'
}

/**
 * @return {void}
 */
Bitset.prototype.flip = function () {
  for (let i = 0; i < this.str.length; i++) {
    if (this.str[i] === '1') {
      this.str[i] = '0'
    } else {
      this.str[i] = '1'
    }
  }
}

/**
 * @return {boolean}
 */
Bitset.prototype.all = function () {
  let flag = true
  for (let i = 0; i < this.str.length; i++) {
    if (this.str[i] === '0') {
      flag = false
    }
  }
  return flag
}

/**
 * @return {boolean}
 */
Bitset.prototype.one = function () {
  let flag = false
  for (let i = 0; i < this.str.length; i++) {
    if (this.str[i] === '1') {
      flag = true
    }
  }
  return flag
}

/**
 * @return {number}
 */
Bitset.prototype.count = function () {
  let count = 0
  for (let i = 0; i < this.str.length; i++) {
    if (this.str[i] === '1') {
      count++
    }
  }
  return count
}

/**
 * @return {string}
 */
Bitset.prototype.toString = function () {
  return this.str
}

/**
 * Your Bitset object will be instantiated and called as such:
 * var obj = new Bitset(size)
 * obj.fix(idx)
 * obj.unfix(idx)
 * obj.flip()
 * var param_4 = obj.all()
 * var param_5 = obj.one()
 * var param_6 = obj.count()
 * var param_7 = obj.toString()
 */

let obj = new Bitset(5)
obj.fix()

console.log(obj.toString())
