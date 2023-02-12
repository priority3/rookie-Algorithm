impl Solution {
  pub fn shortest_alternating_paths(n: i32, red_edges: Vec<Vec<i32>>, blue_edges: Vec<Vec<i32>>) -> Vec<i32> {
    use std::collections::VecDeque;
    // enum Color {
    //   Red,
    //   Blue,
    //   Init,
    // }
    let mut res = vec![-1; n];
    let n = n as usize;
    let mut graph = vec![vec![]; n];

    for edge in red_edges {
      graph[edge[0] as usize].push((edge[1], 1));
    }
    for edge in blue_edges {
      graph[edge[0] as usize].push((edge[1], 2));
    }

    let mut queue: VecDeque<(i32, i32)> = VecDeque::new();

    queue.push_back((0, 0));


    let mut step = 0;
    while !queue.is_empty() {
      for _ in 0..queue.len() {
        let (node, color) = queue.pop_front().unwrap();

        if res[node as usize] == -1 {
          res[node as usize] = step;
        }

        let length: usize = graph[node as usize].len();

        for i in 0..length {
          let mut edge = graph[node as usize][i];
          // the color of the edge that node to num [num,color]
          if edge.0 == -1 || edge.1 == color {
            continue;
          }
          queue.push_back((edge.0, edge.1));
          graph[node as usize][i].0 = -1;
        }
      }
      step += 1;
    }
    return res;
  }
}