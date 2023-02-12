impl Solution {
  pub fn minimum_fuel_cost(roads: Vec<Vec<i32>>, seats: i32) -> i64 {
    let length = roads.len();
    if length == 0 {
      return 0;
    }
    let mut roadsMap = vec![vec![]; length + 1];


    for edge in roads {
      // roadsMap[edge[0] as usize].push(edge[1]);
      // roadsMap[edge[1] as usize].push(edge[0]);
      let (l, r) = (edge[0] as usize, edge[1] as usize);
      roadsMap[l].push(r);
      roadsMap[r].push(l);
    }
    let mut res: i64 = 0;

    Self::dfs(&roadsMap, 0, 0, seats as i64, &mut res);
    res
  }
  fn dfs(roadsMap: &Vec<Vec<usize>>, cur: usize, prev: usize, seats: i64, mut res: &mut i64) -> i64 {
    let mut people = 1;

    for &neighbor in &roadsMap[cur] {
      // equal self
      if neighbor == prev {
        continue;
      }
      people += Self::dfs(roadsMap, neighbor, cur, seats, res);
    }
    if cur > 0 {
      *res += (people - 1) / seats + 1;
    }
    people
  }
}