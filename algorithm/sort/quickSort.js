import {less, exch} from "./utils"

class QuickSort {

  static sort(a) {
    const len = a.length;
    // 随机打乱
    this.randomArr(a);
    this.sonSort(a, 0, len-1);
    return a;
  }

  static randomArr(a) {
    const len = a.length;
    for(let i=0; i<len; i++) {
      const r = Math.floor(i + Math.random() * (len - 1 - i));
      exch(a, i, r);
    }
  }

  static sonSort(a, lo, hi) {
    // 只有一个元素，返回
    if(lo >= hi) return;
    let j = this.partition(a, lo, hi);
    this.sonSort(a, lo, j-1);
    this.sonSort(a, j+1, hi);
  }

  static partition(a, lo, hi) {
    let i = lo, j = hi + 1;
    while(true) {
      // 从左至右找出一个大于等于a[low]的元素下标
      while (less(a, ++i, lo)) if (i == hi) break;
      // 从右至左找出一个小于等于a[low]的元素下标
      while (less(a, lo, --j)) if (j == lo) break;
      /**
       * 1. 数组正序排序 如 [1,2,3,4,5]
       *  此时 i = 1, j = 0, 满足 i>=j , break
       * 2. 数组逆序排序 如 [5,4,3,2,1]
       *  此时 i = 4, 满足 i = hi, break
       * 3. 已经产生一或多组元素下标并交换值，假设此时数组内 a[i] 至 a[j]（不包含a[i]和a[j]) 已经没有这样的两个元素，则
       *    i 至多增加到j,因为现在a[j]肯定是大于等于a[lo]的,j至多减少到i，因为a[i]是小于等于a[lo]的，
       * 此时有 i>=j, break，将a[lo] 和 a[j] 交换，保证了a[lo] 至 a[j-1] 中的元素都小于等于a[j],
       * a[j+1]至a[hi]中的元素都大于等于a[lo]
       */
      if(i>=j) break;
      // 交换两个下标的值
      exch(a, i, j);
    }
    // i>=j时，交换下标lo和j的值
    exch(a, lo, j);
    // 返回a[low]在有序数组中的下标
    return j;
  }
}
