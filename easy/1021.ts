function removeOuterParentheses(s: string): string {
  let res = ''
  const stack:string[] = []
  s.split("").forEach(item => {
    if(item === ')'){
      stack.pop()
    }
    if(stack.length){
      res += item
    }
    if(item === '('){
      stack.push(item)
    }
  })
  return res
};

console.log(removeOuterParentheses('(()())(())(()(()))'));
//  --> "()()()()(())"
