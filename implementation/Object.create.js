/**
* Object.create 实现
* 效果： Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__
* Object.create(null) 和 {} 的区别 (原型链上有无Object.prototype的属性)
* Object.create({}) 和 {} 的区别 (多一层__proto__)
* Object.create(Object.prototype) 和 {} (一样)
* @param {*} proto 新创建对象的原型对象
* @param {*} propertiesObject 可选，如果没有指定为undefined，代表要添加到新创建对象的不可枚举（默认）属性
    （即其自身定义的属性，而不是其原型链上的枚举对象 对象的属性描述符以及相应的属性名称。这些属性对应
    Object.defineProperties()的第二个参数
*/
function myCreate(proto) {
  function F() {}
  F.prototype = proto;
  return new F();
}
