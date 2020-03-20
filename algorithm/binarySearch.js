/**
 *
 *  二分查找非递归实现
 * @param {*} key
 * @param {*} arr
 * @returns
 */
function binarySearch(key, arr) {
  let low = 0;
  let high = arr.length-1;
  while(low<=high) {
    let mid = parseInt((low + high) / 2);
    if(key < arr[mid]) high = mid - 1;
    else if(key > arr[mid]) low = mid + 1;
    else return mid;
  }
  return -1;
}

/**
 *  二分查找递归实现
 *
 * @param {*} key
 * @param {*} arr
 * @returns
 */
function binarySearchByRecurrence(key, arr) {
  return rank(key, arr, 0, arr.length-1);
}

function rank(key, arr, low, high) {
  if(low > high) return -1;
  let mid = parseInt((low + high) / 2);
  if(key < arr[mid]) return rank(key, arr, low, mid-1);
  else if(key > arr[mid]) return rank(key, arr, mid+1, high);
  else return mid;
}
