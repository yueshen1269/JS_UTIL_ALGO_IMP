import {less, exch} from "./utils"

class MergeSort {

  static sort(a) {
    let low = 0,
        len = a.length,
        high = len-1,
        temp = new Array(len);

    this.sonSort(a, low, high, temp);
    return a;
  }

  static sonSort(a, low, high, temp) {
    if(low >= high) return;
    let mid = parseInt((low + high) / 2);
    this.sonSort(a, low, mid, temp);
    this.sonSort(a, mid+1, high, temp);
    return this.merge(a, low, mid, high, temp)
  }

  static merge(a, low, mid, high, temp) {
    let i = low, j= mid+1, len = high - low + 1;
    let s = 0;
    while(len--) {
      if(i>mid) temp[s++] = a[j++];
      else if(j>high) temp[s++] = a[i++];
      else if(less(a, i, j)) temp[s++] = a[i++];
      else temp[s++] = a[j++];
    }
    s = 0;
    while(low<=high) {
      a[low++] = temp[s++];
    }
  }
}
