/**
 * 更改this指向 函数apply
 * 思想同call类似，只是传参不同
 *
 * @param {*} context
 * @param {*} arr
 * @returns
 */
function myApply(context, arr) {
  if (typeof this !== "function") {
    throw new Error(
      "Function.prototype.bind - what is trying to be bound is not callable"
    );
  }
  var context = Object(context) || window;
  context.fn = this;
  var result;
  if (!arr) {
    result = context.fn();
  } else {
    var args = [];
    for (var i = 0, len = arr.length; i < len; i++) {
      args.push("arr[" + i + "]");
    }
    result = eval("context.fn(" + args + ")");
  }
  delete context.fn;
  return result;
}
