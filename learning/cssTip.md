# css相关

## nth-child(n) 和 nth-of-type(n)

1. fatherSelector targetElement:nth-child(n) : 选择父选择器fatherSelector下的第n个元素，并且targetElement必须要和选择的元素对应，否则会失效，可以不加
2. fatherSelector targetElement:nth-of-type(n) : 选择父选择器fatherSelector下第n个targetElement元素，如果没有加targetElement，则会选择父选择器fatherSelector下每一种类型的元素
3. 例子
   ```html
   <div class="father">
    <div class="son-div index1">
    <div class="son-div index2">
    <p class="son-p index3">
    <div class="son-div index4">
    <p class="son-p index5">
   </div>
   ```
   `.father :nth-child(3)`选择的是 `<p class="son-p index3">`(.father 下的第三个元素)
   `.father .son-div:nth-child(4)`选择的是 `<div class="son-div index4">`(.father 下的第四个元素)
   `.father .son-p:nth-of-type(2)`选择的是 `<p class="son-p index5">`(.father 下的第二个 .son-p 元素)
   `.father :nth-of-type(1)`选择的是 `<div class="son-div index1">` 和 `<p class="son-p index3">` (第一个div元素和第一个p元素)

## 1px边框

```css
  target {
    position: relative;
  }
  /* 四周边框 */
  target::after {
   content: "";
   position: absolute;
   box-sizing: border-box;
   pointer-events: none;
   top: -50%;
   left: -50%;
   bottom: -50%;
   right: -50%;
   border: 1px solid red;
   transform-origin: center;
   transform: scale(0.5);
  }
  /* 上下两个边框 */
  target::after {
   content: "";
   position: absolute;
   box-sizing: border-box;
   pointer-events: none;
   top: -50%;
   left: -50%;
   bottom: -50%;
   right: -50%;
   /* border先设置成0 */
   border: 0 solid red;
   transform-origin: center;
   transform: scale(0.5);
   /* 分别设置上下两个边框 */
   border-top-width: 1px;
   border-bottom-width: 1px;
  }
  /* 底部边框 */
  target::after {
   content: "";
   position: absolute;
   box-sizing: border-box;
   pointer-events: none;
   top: auto;
   left: 0;
   bottom: 0;
   right: 0;
   border: 1px solid red;
   transform-origin: center;
   transform: scale(0.5);
  }
```
