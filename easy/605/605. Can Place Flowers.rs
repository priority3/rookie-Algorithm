impl Solution {
  pub fn can_place_flowers(mut flowerbed: Vec<i32>, n: i32) -> bool {
    let mut res:i32 = n;
    if res == 0 {
      return false
    }
    for i in 0..flowerbed.len() {
      if flowerbed[i] == 0 && (i == 0 || flowerbed[i - 1] == 0) && (i == flowerbed.len() - 1 || flowerbed[i + 1] == 0) {
        res -= 1;
        if res == 0 {
          return true;
        }
        flowerbed[i] = 1;
      }
    }

    false

  }
}
