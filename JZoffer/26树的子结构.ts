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

 function isSubStructure(A: TreeNode | null, B: TreeNode | null): boolean {
  // if(!B){
  //   return false;
  // }
  // const traverse = (A:TreeNode | null , B : TreeNode | null):boolean => {
  //   if(A.val === B.val){
  //     return true;
  //   }
  //   if(A.left){
  //     traverse(A.left, B)
  //   }
  //   if(A.right){
  //     traverse(A.right,B)
  //   }
  //   return false
  // }
  // const isChildrenTree = (A: TreeNode | null , B : TreeNode | null): boolean => {
  //   if(traverse(A,B)){
  //     if(A===undefined){
  //       return false
  //     }
  //     if(B===undefined){
  //       return true
  //     }
  //     if(A.val === B.val && A.left){
  //       isChildrenTree(A.left,B.left)
  //     }
  //     if(A.val === B.val && A.right){
  //       isChildrenTree(A.right,B.right)
  //     }
  //     return false
  //   }else{
  //     return false
  //   }
  // }
  if(!B){
    return false
  }
  const recur = (A: TreeNode | null , B: TreeNode | null): boolean => {
    if(B===null){
      return true
    }
    if(A === null || A.val !== B.val){
      return false
    }
    return recur(A.left,B.left) && recur(A.right,B.right)
  }
  const isChildrenTree = (A: TreeNode | null , B : TreeNode | null): boolean => {
    if(A===null){
      return false
    }
    if(B === null){
      return true
    }
    if(A.val === B.val){
      return recur(A,B)
    }
    return isChildrenTree(A.left,B) || isChildrenTree(A.right,B)
  }
  return isChildrenTree(A,B)
};