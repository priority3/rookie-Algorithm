impl Solution {
    pub fn find_kth_positive(arr: Vec<i32>, k: i32) -> i32 {
        let length = arr.len();

        if k < arr[0] {
            return k;
        }
        let mut gap = k - arr[0] + 1;
        let mut start = arr[0];
        for i in 1..length {
            if arr[i] - start <= gap {
                gap -= arr[i] - start - 1;
                start = arr[i];
            } else {
                break;
            }
        }
        return start + gap;
    }
}
