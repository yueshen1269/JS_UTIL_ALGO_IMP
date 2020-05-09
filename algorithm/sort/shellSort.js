import {less, exch} from "./utils"

class ShellSort {

  static sort(a) {
    const len = a.length;
    let h = 1;
    while(h<=parseInt(len/3)) h = h * 3 + 1;
    while(h>=1) {
      for(let i=h; i<len; i+=h) {
        for(let j=i; j>=h && less(a, j, j-h); j -=h) {
          exch(a, j, j-h);
        }
      }
      h = parseInt(h/3);
    }
    return a;
  }
}
