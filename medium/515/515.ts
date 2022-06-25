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
function largestValues(root: TreeNode | null): number[] {
  const res: number[] = []
  const queue: TreeNode[] = []
  if (root)
    queue.push(root)
  while (queue.length !== 0) {
    const size = queue.length
    let max = queue[0].val
    for (let i = 0; i < size; i++) {
      const shift = queue.shift()
      max = Math.max(max, shift?.val as number)
      if (shift?.left)
        queue.push(shift.left)

      if (shift?.right)
        queue.push(shift.right)
    }
    res.push(max)
  }
  return res
}

export {
  largestValues,
}
