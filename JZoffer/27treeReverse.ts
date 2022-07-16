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

function mirrorTree(root: TreeNode | null): TreeNode | null {
  if (!root)
    return null
  // const left = mirrorTree(root.left)
  // const right = mirrorTree(root.right)
  // root.left = right
  // root.right = left
  const left = root.left
  root.left = mirrorTree(root.right)
  root.right = mirrorTree(left)
  return root
}
