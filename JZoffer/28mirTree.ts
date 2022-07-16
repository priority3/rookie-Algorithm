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

function isSymmetric(root: TreeNode | null): boolean {
  if (!root)
    return false
  const dfs = (left: TreeNode | null, right: TreeNode | null): boolean => {
    if (!left && !right)
      return true
    if (!left || !right || left.val !== right.val)
      return false
    return left.val === right.val && dfs(left.left, right.right) && dfs(left.right, right.left)
  }
  return dfs(root.left, root.right)
}
