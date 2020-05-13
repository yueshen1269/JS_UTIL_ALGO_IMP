import {less, exch} from "./utils"

class PriorityQueue {
  static a = [0];

  // 设置
  static setA(arr) {
    this.a.concat(arr);
    for(let i=1; i< Math.floor((this.a.length - 1) / 2); i++) {
      this.sink(this.a, i);
    }
  }

  // 入列
  static enqueue(item) {
    this.a.push(item);
    this.swim(this.a, this.a.length-1);
    return this.a;
  }

  // 将最小元素出队
  static dequeue() {
    exch(this.a, 1, this.a.length-1);
    const r = this.a.pop();
    this.sink(this.a, 1);
    return r;
  }

  // 向上调整
  static swim(a, index) {
    let parentIndex = Math.floor(index / 2);
    while(parentIndex >= 1) {
      if(less(a, index, parentIndex)) {
        exch(a, index, parentIndex);
        index = parentIndex;
        parentIndex = Math.floor(index / 2);
      } else {
        break;
      }
    }
    return a;
  }

  // 向下调整
  static sink(a, index) {
    const len = a.length;

    while(index <= Math.floor((len - 1) / 2)) {
      const lChildIdx = index * 2;
      const rChildIdx = index * 2 + 1;
      let lessChildIdx = lChildIdx;
      if(rChildIdx < len) {
        lessChildIdx = a[lChildIdx] < a[rChildIdx] ? lChildIdx : rChildIdx;
      }
      if(less(a, lessChildIdx, index)) {
        exch(a, index, lessChildIdx);
      }
      index = lessChildIdx;
    }
    return a;
  }
}
