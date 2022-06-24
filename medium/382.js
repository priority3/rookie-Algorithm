/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
var Solution = function(head) {
  this.list = []
  while(head !== null){
    this.list.push(head.val)
    head = head.next
  }
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function() {
  return this.list[Math.floor(Math.random()*this.list.length)]
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */