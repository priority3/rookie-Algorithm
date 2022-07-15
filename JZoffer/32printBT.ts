// Definition for a binary tree node.
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

function levelOrder(root: TreeNode | null): number[] {
  const queue: TreeNode[] = []
  if (!root)
    return []
  queue.push(root)
  const res: number[] = []
  while (queue.length) {
    const node = queue.shift()
    node?.val !== undefined && res.push(node.val)
    if (node?.left)
      queue.push(node.left)
    if (node?.right)
      queue.push(node.right)
  }
  return res
}
