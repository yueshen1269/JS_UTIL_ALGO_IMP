/**
 * 并查集实现之 fast-find算法
 * T(N) ~ O(N^2)
 *
 * @class UnionFind
 */
class UnionFindByFastFind {
  constructor(N){
    // 构造数组，数组元素初始值为下标值
    this.arr = new Array(N).fill(0);
    // 初始联通分量为数组长度
    this.count = N;
    this.arr = this.arr.map((i, k) => k);
  }
  // 查找两个元素是否联通，即处于同一个联通分量中
  find(a, b) {
    // 判断a,b两个位置上的值是否相等
    return this.arr[a] === this.arr[b];
  }
  // 将不处于同一联通分量的两个元素联合，使他们处于相同的联通分量中，设置b所在的联通分量的中所有元素的值为a所在联通分量中元素的值
  // 某个联通分量中的所有元素的值都相同
  union(a, b) {
    if(this.find(a,b)) return;
    let target = this.arr[b];
    let source = this.arr[a];
    this.arr = this.arr.map(i => i === target ? source : i)
    this.count--;
  }
}

/**
 * 并查集实现之fast-union算法
 * T(N)~ O(N^2)
 *
 * @class UnionFindByFastUnion
 */
class UnionFindByFastUnion {
  constructor(N){
    this.arr = new Array(N).fill(0);
    this.count = N;
    this.arr = this.arr.map((i, k) => k);
  }
  // 如果两个元素的根节点不是同一个，则不属于同一个联通分量
  find(a, b) {
    return this.getRoot(a) === this.getRoot(b);
  }
  // 查找元素的根节点所在的下标
  getRoot(a) {
    while(a !== this.arr[a]) {
      a = this.arr[a];
    }
    return a;
  }
  // 将两个元素所在的根节点联结起来，使b->root元素的值为a->root元素的值
  // 如果一个元素的值等于它的下标（即初始值），那么这个元素是一个根节点
  union(a, b) {
    if(this.find(a,b)) return;
    this.count--;
    this.arr[this.getRoot(b)] = this.getRoot(a);
  }
}

/**
 * 并查集实现之 加权的fast-union算法
 * T(N)~ O(NlogN)
 *
 * @class UnionFindByFastUnion2
 */
class UnionFindByFastUnion2 {
  constructor(N){
    this.arr = new Array(N).fill(0);
    // 增加一个数组，记录节点为根节点的所在的联通分量的元素数量
    this.sizeArr = new Array(N).fill(1);
    this.count = N;
    this.arr = this.arr.map((i, k) => k);
  }
  // 如果两个元素的根节点不是同一个，则不属于同一个联通分量
  find(a, b) {
    return this.getRoot(a) === this.getRoot(b);
  }
  // 查找元素的根节点所在的下标
  getRoot(a) {
    while(a !== this.arr[a]) {
      a = this.arr[a];
    }
    return a;
  }
  // 将两个元素所在的根节点联结起来，使b->root元素的值为a->root元素的值
  // 如果一个元素的值等于它的下标（即初始值），那么这个元素是一个根节点
  union(a, b) {
    if(this.find(a,b)) return;
      this.count--;
      let aRoot = this.getRoot(a);
      let bRoot = this.getRoot(b);
    // 判断子树的大小，使每次联结都是小树联结到大树上
      if(this.sizeArr[aRoot] < this.sizeArr[bRoot]) {
        this.arr[aRoot] = this.arr[bRoot];
        this.sizeArr[bRoot] += this.sizeArr[aRoot];
        this.sizeArr[aRoot] = 0;
      } else {
        this.arr[bRoot] = this.arr[aRoot];
        this.sizeArr[aRoot] += this.sizeArr[bRoot];
        this.sizeArr[bRoot] = 0;
      }
  }
}

/**
 * 并查集实现之 路径优化的加权fast-union算法
 *
 * @class UnionFindByFastUnion3
 */
class UnionFindByFastUnion3 {
  constructor(N){
    this.arr = new Array(N).fill(0);
    // 增加一个数组，记录节点为根节点的所在的联通分量的元素数量
    this.sizeArr = new Array(N).fill(1);
    this.count = N;
    this.arr = this.arr.map((i, k) => k);
  }
  // 如果两个元素的根节点不是同一个，则不属于同一个联通分量
  find(a, b) {
    return this.getRoot(a) === this.getRoot(b);
  }
  // 查找元素的根节点所在的下标
  getRoot(a) {
    while(a !== this.arr[a]) {
      // 查询根节点的时候顺便将该节点的父节点直接指向根节点，压缩路径
      this.arr[a] = this.arr[this.arr[a]];
      a = this.arr[a];
    }
    return a;
  }
  // 将两个元素所在的根节点联结起来，使b->root元素的值为a->root元素的值
  // 如果一个元素的值等于它的下标（即初始值），那么这个元素是一个根节点
  union(a, b) {
    if(this.find(a,b)) return;
      this.count--;
      let aRoot = this.getRoot(a);
      let bRoot = this.getRoot(b);

    // 判断子树的大小，使每次联结都是小树联结到大树上, 并且将小树上的每一个元素的父元素都设为大树的根节点，这样大树永远只要两层
      if(this.sizeArr[aRoot] < this.sizeArr[bRoot]) {
        this.arr[aRoot] = this.arr[bRoot];
        this.sizeArr[bRoot] += this.sizeArr[aRoot];
        this.sizeArr[aRoot] = 0;
      } else {
        this.arr[bRoot] = this.arr[aRoot];
        this.sizeArr[aRoot] += this.sizeArr[bRoot];
        this.sizeArr[bRoot] = 0;
      }
  }
}
