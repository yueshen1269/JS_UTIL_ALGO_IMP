/**
 * vue 的数据劫持实现
 * 通过访问obj.a 相当于 obj.data.a
 */


let obj = {data: {a: 1, b:2}};
Object.keys(obj.data).forEach((key) => {
  Object.defineProperty(obj, key, {
    get() {
      return this.data[key]
    },
    set(val) {
      this.data[key] = val
    }
  })
})
