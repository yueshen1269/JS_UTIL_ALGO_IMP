import {less, exch} from "./utils"

/**
 * 从剩下的数组元素中选择最小的一个元素，与已排序元素的后一位元素交换位置
 * [sorted1, sorted2,..., sortedM, unsorted1, unsorted2,...,unsortedK]
 * 时间复杂度为 O(n^2)
 * 与数组的初始状态无关
 */
class selectionSort {

  static sort = (a) => {
    const len = a.length;
    for(let i=0; i<len; i++) {
      let min = i;
      for(let j=i+1; j<len; j++) {
        if(less(a, j, min))
          min = j;
      }
      exch(a, i, min);
    }
    return a;
  }
}
