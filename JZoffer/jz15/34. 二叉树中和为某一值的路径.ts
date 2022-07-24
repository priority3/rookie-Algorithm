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
// pre traversal
function pathSum(root: TreeNode | null, target: number): number[][] {
  const res: number[][] = []
  const path: number[] = []
  const dfs = (root: TreeNode | null, count: number) => {
    if (!root || count > target)
      return
    path.push(root.val)
    count -= root.val
    if (count === 0 && !root.left && !root.right)
      res.push(path)
    dfs(root.left, count)
    dfs(root.right, count)
    path.pop()
  }
  dfs(root, target)
  return res
}
