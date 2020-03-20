/**
 *  返回两个数组的交集(数组值为基本类型)
 *
 * @param {*} arr1
 * @param {*} arr2
 */
function intersectionOfTwoArrays(arr1, arr2) {
  if(!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return [];
  }
  let rst = [];
  let obj = {};

  for(let i of arr1) {
    if(obj[i]) obj[i] += 1;
    else obj[i] = 1;
  }

  for(let i of arr2) {
    if(obj[i]) {
      obj[i] -= 1;
      rst.push(i);
    }
  }

  return rst;
}
