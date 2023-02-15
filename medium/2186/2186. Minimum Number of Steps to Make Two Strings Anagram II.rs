// use std::num;

impl Solution {
  pub fn min_steps(s: String, t: String) -> i32 {
    let mut res = 0;

    fn count(s: &str, target: char) -> i32 {
      let mut res = 0;
      for c in s.chars() {
        res += if c as i32 == target as i32 { 1 } else { 0 };
      }

      res
    }
    for i in 0..26 {
      let c = (i + 'a' as i32) as u8 as char;
      res += (count(&s, c) - count(&t, c)).abs() as i32;
    }
    res
  }
}