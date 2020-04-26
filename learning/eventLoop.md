# js 事件

```javascript
  console.log("script start");

  setTimeout(function() {
    console.log("setTimeout")
  }, 0);

  Promise.resolve().then(function() {
    console.log("Promise1");
    // 这里 return 111; 结果不一样
    return Promise.resolve(111);
  }).then(function(val) {
    console.log(val);
    console.log("Promise1-2");
  });

  Promise.resolve().then(function() {
    setTimeout(function() {
      console.log("Promise-2")
    }, 0);
  }).then(function() {
    console.log("Promise2-2");
  });

  console.log("script end");
```
打印顺序
```
  script start
  script end
  Promise1
  Promise2-2
  111
  Promise1-2
  setTimeout
  Promise-2
```
