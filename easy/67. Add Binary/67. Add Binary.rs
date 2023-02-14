impl Solution {
  pub fn add_binary(a: String, b: String) -> String {
    let mut res = String::new();
    // a 1010 b 1011

    let chars_a: Vec<char> = a.chars().collect();
    let chars_b: Vec<char> = b.chars().collect();

    let mut m = chars_a.len();
    let mut n = chars_b.len();

    let mut carry = 0;

    while m > 0 || n > 0 || carry > 0 {
      let mut sum = carry;
      if m > 0 {
        sum += chars_a[m - 1] as u8 - '0' as u8;
        m -= 1;
      }
      if n > 0 {
        sum += chars_b[n - 1] as u8 - '0' as u8;
        n -= 1;
      }
      res.push((sum % 2 + '0' as u8) as char);
      carry = sum / 2;
    }

    res.chars().rev().collect()
  }
}