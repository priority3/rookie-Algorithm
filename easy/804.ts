function uniqueMorseRepresentations(words: string[]): number {
  const map : string[] = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
  let count : number = 0
  let strArr : string[] = []
  words.map((item) => {
    let str = ''
    item.split('').map((it) => {
      str += map[it.charCodeAt(0)-97]
    })
    if(strArr.indexOf(str) === -1){
      count++
      strArr.push(str)
    }
  })
  return count
};