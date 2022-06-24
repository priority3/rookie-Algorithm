/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function preorder(root: Node | null): number[] {
  let res: number[] = []
  if (root) {
    res.push(root.val)
    for (const child of root.children) {
      res.push(...preorder(child))
    }
  }
  return res
}
