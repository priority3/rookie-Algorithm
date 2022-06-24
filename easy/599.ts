function findRestaurant(list1: string[], list2: string[]): string[] {
  const list1len = list1.length
  const list2len = list2.length
  let str: string[] = []
  let min = Number.MAX_VALUE
  for (let i = 0; i < list1len; i++) {
    for (let j = 0; j < list2len; j++) {
      if (list1[i] === list2[j] && i + j < min) {
        min = i + j
        str.push(list1[i])
      }
    }
  }
  return str.toString().split('')
}
