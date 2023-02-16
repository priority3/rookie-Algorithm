# Definition for singly-linked list.
class ListNode:
  def __init__(self, val=0, next=None):
    self.val = val
    self.next = next


# Definition for a binary tree node.
class TreeNode:
  def __init__(self, val=0, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right


from typing import Optional, List


class Solution:
  def sortedListToBST(self, head: Optional[ListNode]) -> Optional[TreeNode]:
    if not head:
      return None
    nums = []
    while head:
      nums.append(head.val)
      head = head.next
    
    mid = len(nums) // 2
    
    root = TreeNode(nums[mid])
    self.binarySearch(nums[:mid], "left", root)
    self.binarySearch(nums[mid + 1:], "right", root)
    
    return root
  
  def binarySearch(self, nums: List[int], direction: str, curNode: Optional[TreeNode]) -> Optional[TreeNode]:
    if len(nums) == 0:
      return None
    
    mid = len(nums) // 2
    if direction == "left":
      curNode.left = TreeNode(nums[mid])
      self.binarySearch(nums[:mid], "left", curNode.left)
      self.binarySearch(nums[mid + 1:], "right", curNode.left)
    else:
      curNode.right = TreeNode(nums[mid])
      self.binarySearch(nums[:mid], "left", curNode.right)
      self.binarySearch(nums[mid + 1:], "right", curNode.right)
    return curNode
