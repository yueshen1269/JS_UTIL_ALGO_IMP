// test a = [1,2,3,3,4,5,2,3,8,45,7,66,24]
class InsertionSort {
  // 插入排序实现
  static sort(arr) {
    for(let i=1; i<arr.length; i++) {
      for(let j=i-1; j>=0 && this.less(arr[j+1], arr[j]); j--) {
        this.exch(arr, j, j+1);
      }
    }
  }

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
      if(this.less(arr[i+1], arr[i])) {
        return false;
      }
    }
    return true;
  }
}
