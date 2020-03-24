/**
 * bind功能和call、apply类似，都能更改this指向
 *
 * 不同：
 *  1. bind() 函数返回是一个函数，call/apply立即执行
 *  2. 所执行函数的参数可以分两次传递，如
 *    function a(param1, param2, param3) {} 需要传递三个参数
 *    a.bind(o, param1, param2)(param3) 或者
 *    a.bind(o, param1)(param2, param3) 等格式
 *
 *  注意点：new bind() 时this的指向，new操作符的优先级大于bind
 *
 * @param {*} context
 * @returns
 */
function myBind(context) {
  if (typeof this !== "function") {
    throw new Error(
      "Function.prototype.bind - what is trying to be bound is not callable"
    );
  }
  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);
  var fNOP = function() {};
  var fbound = function() {
    // this instanceof self, 判断是否使用 new 来调用 fbound
    // 如果是 new 来调用的话，this的指向就是其实例，
    // 如果不是 new 调用的话，就改变 this 指向到指定的对象 context
    // new fbound() 操作 1.新建一个对象  obj ={} 2.将构造函数的作用域赋给新对象 obj.__proto__ = fbound.prototype 3. 执行构造函数中的代码 4. 返回新对象
    // 步骤3中有 fbound.apply(obj, arguments), 此时this指向obj self在obj的原型链上，所以instanceof判断成立
    // 如果不是new调用的话 this 就指向window对象或者undefined
    self.apply(
      this instanceof self ? this : context,
      args.concat(Array.prototype.slice.call(arguments))
    );
  };
  fNOP.prototype = this.prototype;
  fbound.prototype = new fNOP();
  return fbound;
}
