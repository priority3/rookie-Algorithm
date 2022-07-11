class MinStack {
  stack: number[] = []
  minnum: number[] = []

  push(x: number): void {
    this.stack.push(x)
    this.minnum.push(Math.min(this.minnum[this.minnum.length - 1], x))
  }

  pop(): void {
    this.stack.pop()
    this.minnum.pop()
  }

  top(): number {
    return this.stack[this.stack.length - 1]
  }

  min(): number {
    return this.minnum[this.minnum.length - 1]
  }
}

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.min()
*/
