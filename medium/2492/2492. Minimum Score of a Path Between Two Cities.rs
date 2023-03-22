use std::cmp::min;
use std::collections::HashMap;

impl Solution {
    pub fn min_score(n: i32, roads: Vec<Vec<i32>>) -> i32 {
        let mut map:HashMap<i32,Vec<(i32, i32)>> = HashMap::new();
        roads.into_iter().for_each(|v| {
            map.entry(v[0]).or_default().push((v[1], v[2]));
            map.entry(v[1]).or_default().push((v[0], v[2]));
        });
        let mut res = i32::MAX;
        Self::dfs(1, &map, &mut vec![false; 1 + n as usize], &mut res);
        res
    }
    pub fn dfs(node: i32, graph: &HashMap<i32,Vec<(i32, i32)>>, visited:&mut Vec<bool>, min_path: &mut i32) {
        visited[node as usize] = true;
        match graph.get(&node) {
            None => {},
            Some(values) => {
                values.iter().for_each(|value| {
                    *min_path = min(*min_path,value.1);
                    if !visited[value.0 as usize] {
                        Self::dfs(value.0, graph, visited, min_path)
                    }
                })
            }
        }
    }
}
