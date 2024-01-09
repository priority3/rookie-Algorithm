// Definition for a binary tree node.
class BinaryTreeNode {
  val: number
  left: BinaryTreeNode | null
  right: BinaryTreeNode | null
  constructor(val?: number, left?: BinaryTreeNode | null, right?: BinaryTreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

function preOrder(root: BinaryTreeNode | null, sequence: Array<number>) {
  if (root !== null) {
    // TODO
    if (!root.left && !root.right)
      sequence.push(root.val)
    root.left && preOrder(root.left, sequence)
    root.right && preOrder(root.right, sequence)
  }
}

function leafSimilar(root1: BinaryTreeNode | null, root2: BinaryTreeNode | null): boolean {
  const sequenceA: Array<number> = []
  const sequenceB: Array<number> = []
  preOrder(root1, sequenceA)
  preOrder(root2, sequenceB)

  let res = true
  if (sequenceA.length !== sequenceB.length)
    return false
  for (let i = 0; i < sequenceA.length; i++) {
    if (sequenceA[i] !== sequenceB[i]) {
      res = false
      break
    }
  }

  return res
}

// planB

// end recursion flag
let flag = false

const recursion = function (root1: BinaryTreeNode | null, root2: BinaryTreeNode | null): boolean {
  if (flag)

    return false

  if (root1 === null || root2 === null) {
    return false
  }
  else {
    root1.left && root2.left && recursion(root1.left, root2.left)
    root1.right && root2.right && recursion(root1.right, root2.right)

    if (root1.val !== root2.val) {
      flag = true
      return false
    }
    else { return true }
  }
}

function leafSimilarPlanB(root1: BinaryTreeNode | null, root2: BinaryTreeNode | null): boolean {
  if (recursion(root1, root2))
    return true

  else
    return false
}

const A = new BinaryTreeNode(1)
const B = new BinaryTreeNode(1)

console.log(leafSimilarPlanB(A, B))

