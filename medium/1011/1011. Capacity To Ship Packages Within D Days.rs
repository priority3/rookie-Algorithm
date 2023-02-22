impl Solution {
  pub fn ship_within_days(weights: Vec<i32>, days: i32) -> i32 {
      let (mut min, mut max) = weights.iter().fold((i32::MIN, 0), |mut acc, &v| {
          acc.1 += v;
          acc.0 = i32::max(acc.0, v);
          acc
      });

      let mut mid;

      while min < max {
          mid = (min + max) / 2;

          if Self::can_ship_all(mid, &weights, days) {
              max = mid;
          } else {
              min = mid + 1;
          }
      }

      min
  }

  fn can_ship_all(ship_capac: i32, weights: &Vec<i32>, mut limit: i32) -> bool {
      let (mut i, mut ship) = (0, ship_capac);

      while i < weights.len() {
          if ship >= weights[i] {
              ship -= weights[i];
              i += 1;
          } else {
              ship = ship_capac;
              limit -= 1;
          }

          if limit == 0 { return false }
      }

      true
  }
}
