import {less, exch} from "./utils"

class InsertionSort {

  static sort(a) {
    const len = a.length;
    for(let i=1; i<len; i++) {
      for(let j=i; j>0 && less(a, j, j-1); j--) {
        exch(a, j, j-1);
      }
    }
    return a;
  }
}
