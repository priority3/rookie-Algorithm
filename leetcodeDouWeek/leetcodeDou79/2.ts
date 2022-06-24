function largestWordCount(messages: string[], senders: string[]): string {
  let map =new Map<string,number>()
  senders.forEach((item,index) => {
    let count = messages[index].split(" ").length
    let sender = map.get(item)
    map.set(item,sender ? sender+count : count)
  })
  let maxNum = Number.MIN_VALUE
  let res = ''
  for(let x of map){
    if(x[1] > maxNum){
      res = x[0]
      maxNum = x[1]
    }
    if(x[1] === maxNum && x[0] > res){
      res = x[0]
      maxNum = x[1]
    }
  }
  return res
};

console.log(largestWordCount(["Hello userTwooo","Hi userThree","Wonderful day Alice","Nice day userThree"], ["Alice","userTwo","userThree","Alice"]));

