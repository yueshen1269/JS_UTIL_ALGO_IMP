/**
 *  事件代理的实现
 *  处理e.target 为 selector的子元素，被代理元素的子孙元素为事件对象
 *
 *  1. 通过element.parentNode 向上查找，如果祖先元素中存在被代理的元素，则触发回调函数
 *  2. 查找所有element下的selector，逐一分析判断node.contains(e.target)
 *
 * @param {*} element 代理对象（祖先级）
 * @param {*} eventType 代理的事件类型
 * @param {*} selector 被代理的对象（子孙级）
 * @param {*} fn 回调函数
 * @returns
 */
function delegate(element, eventType, selector, fn) {
  let selectors = element.querySelectorAll(selector);
  function callback(e) {
    e = e || window.event;
    const target = e.target || e.srcElement;
    for(let select of selectors) {
      if(select.contains(target))
        fn.call(target, e, target)
    }
  }
  // 第三个参数为 指定事件处理函数的时期或阶段，true为在捕获过程中执行，false在冒泡过程中执行
  element.addEventListener(eventType, callback, false);
}
