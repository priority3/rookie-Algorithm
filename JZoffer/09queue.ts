class CQueue {
  queue: number[] = []
  constructor() {
    this.queue = []
  }

  appendTail(value: number): void {
    this.queue.push(value)
  }

  deleteHead(): number {
    return this.queue.shift() || -1
  }
}

/**
* Your CQueue object will be instantiated and called as such:
* var obj = new CQueue()
* obj.appendTail(value)
* var param_2 = obj.deleteHead()
*/
