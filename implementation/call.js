/**
 *  更改this的指向 函数call
 *  思想：将要执行的函数作为一个属性赋给context，然后执行，最后在删除这个
 *  属性（Object.fn fn中的this指向Object)
 *  细节：使用eval执行context.fn，并拼接参数，未使用es6等相关语法
 *  eval()补充：
 *    定义：eval()可以接受一个字符串作为参数，并把这个参数作为脚本代码执行
 *    参数：
 *      1.参数是一个表达式，eval()函数将执行表达式
 *      2.参数是JS语句，eval()函数执行JS语句
 *      3.执行结果是一个值就返回，不是就返回undefined,如果参数不是一个字符串，则直接返回该参数
 *
 * @param {*} context this改变的对象
 * @returns
 */
function myCall(context) {
  if (typeof this !== "function") {
    throw new Error(
      "Function.prototype.bind - what is trying to be bound is not callable"
    );
  }
  // 未传入参数，则默认为window
  var context = Object(context) || window;
  var args = [];
  // this代表调用call的函数，如a.call(context)
  context.fn = this;
  for (var i = 1, len = arguments.length; i < len; i++) {
    args.push("arguments[" + i + "]");
  }
  // eval("console.log('DD'," + [1,2,3] + ")") 输出 DD 1 2 3
  // 字符串拼接，array.toString(), [1,2,3] -> "1,2,3"

  // 格式如下：
  // context.fn("arguments[1], arguments[2],arguments[3]")
  var result = eval("context.fn(" + args + ")");
  delete context.fn;
  return result;
}
