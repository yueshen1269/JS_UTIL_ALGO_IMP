class BaseSort {

  // a是否小于b，是则返回true
  static less(a, b) {
    return a<b;
  }
  // 交换数组arr中下标为i，j两个位置的值
  static exch(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  // 判断数组是否有序
  static isSorted(arr) {
    for(let i=0; i<arr.length-1; i++) {
      if(!this.less(arr[i+1], arr[i])) {
        return false;
      }
    }
    return true;
  }
  // 排序
  static sort(arr) {

  }
}

export default BaseSort;
