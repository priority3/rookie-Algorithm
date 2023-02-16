use std::cell::RefCell;
use std::rc::Rc;

// Definition for singly-linked list.
#[derive(PartialEq, Eq, Clone, Debug)]
pub struct ListNode {
  pub val: i32,
  pub next: Option<Box<ListNode>>,
}

impl ListNode {
  #[inline]
  fn new(val: i32) -> Self {
    ListNode {
      next: None,
      val,
    }
  }
}

// Definition for a binary tree node.
#[derive(Debug, PartialEq, Eq)]
pub struct TreeNode {
  pub val: i32,
  pub left: Option<Rc<RefCell<TreeNode>>>,
  pub right: Option<Rc<RefCell<TreeNode>>>,
}

impl TreeNode {
  #[inline]
  pub fn new(val: i32) -> Self {
    TreeNode {
      val,
      left: None,
      right: None,
    }
  }
}

type Node = Option<Rc<RefCell<TreeNode>>>;

impl Solution {
  pub fn sorted_list_to_bst(head: Option<Box<ListNode>>) -> Node {
    // if !head {
    //   None
    // }
    let mut nums = Vec::new();
    while let Some(node) = head {
      nums.push(node.val);
      head = node.next;
    }
    Self::binarySearch(&nums[..])
  }
  fn binarySearch(nums: &[i32]) -> Node {
    let mut n = nums.len();
    match n {
      0 => None,
      _ => {
        let mid = n / 2;
        let mut root = TreeNode::new(nums[mid]);
        root.left = Self::binarySearch(&nums[..mid]);
        root.right = Self::binarySearch(&nums[mid + 1..]);
        Some(Rc::new(RefCell::new(root)))
      }
    }
  }
}