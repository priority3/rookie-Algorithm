impl Solution {
  pub fn mincost_tickets(mut days: Vec<i32>, costs: Vec<i32>) -> i32 {
      let n = days.len();
      let mut dp = vec![i32::MAX;n + 1];
      dp[0] = 0;
      for i in 1..n + 1 {
          dp[i] = dp[i - 1] + costs[0];
          let mut j = i - 1;
          while j > 0 && days[i-1] - days[j-1] < 7 {
              j -= 1;
          }
          dp[i] = dp[i].min(dp[j] + costs[1]);
          j = i - 1;
          while j > 0 && days[i-1] - days[j-1] < 30 {
              j -= 1;
          }
          dp[i] = dp[i].min(dp[j] + costs[2])
      }

      dp[n]
  }
}
