// function findTheWinner(n: number, k: number): number {
//   let res = [...Array(n).keys()].map((item) => item + 1)
//   let cur = 0
//   while (res.length !== 1) {
//     cur = (cur + k - 1) % res.length
//     res.splice(cur, 1)
//   }

//   return res[0]
// }
// console.log(findTheWinner(3, 1))

function findTheWinner(n: number, k: number): number {
  const non = (n: number, k: number): number => {
    if (n === 1) {
      return 0
    }
    return (non(n - 1, k) + k) % n
  }

  return non(n, k) + 1
}
console.log(findTheWinner(3, 1))
