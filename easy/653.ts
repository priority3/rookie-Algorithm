/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

 function findTarget(root: TreeNode | null, k: number): boolean {
  
  if (!root) return false
  let stack: TreeNode[] = []
  let set: Set<number> = new Set()
  let node: TreeNode | null = root
  while (node) {
    if (set.has(k - node.val)) return true
    set.add(node.val)
    if (node.left) {stack.push(node.left)}
    node = node.right
    if (!node && stack.length) node = stack.pop()
  }
  return false
};