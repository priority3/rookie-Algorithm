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

function levelOrder(root: TreeNode | null): number[][] {
  if (!root)
    return []
  const res: number[][] = []
  const queue: TreeNode[] = []
  let tag = false
  queue.push(root)
  while (queue.length) {
    const len = queue.length
    const temp = []

    for (let i = 0; i < len; i++) {
      const node = queue.shift()
      if (tag && node?.val !== undefined)
        temp.push(node?.val)
      else if (node?.val !== undefined)
        temp.unshift(node?.val)
      node?.left && queue.push(node.left)
      node?.right && queue.push(node.right)
    }
    res.push(temp)
    tag = !tag
  }
  return res
}
