# JS 中判断 a==b 的算法

1. 如果`x`不是正常值（比如抛出一个错误），中断执行
2. 如果`y`不是正常值，中断执行
3. 如果`Type(x)`与`Type(y)`相同，执行严格相等运算`x === y`
4. 如果`x`是`null`，`y`是``undefined`，返回`true`
5. 如果`x`是`undefined`，`y`是`null`，返回`true`
6. 如果`Type(x)`是数值，`Type(y)`是字符串，返回`x == ToNumber(y)`的结果
7. 如果`Type(x)`是字符串，`Type(y)`是数值，返回`ToNumber(x) == y`的结果
8. 如果`Type(x)`是布尔值，返回`ToNumber(x) == y`的结果
9. 如果`Type(y)`是布尔值，返回`x == ToNumber(y)`的结果
10. 如果`Type(x)`是字符串或数值或Symbol值，Type(y)是对象，返回`x == ToPrimitive(y)`的结果
11. 如果`Type(x)`是对象，`Type(y)`是字符串或数值或`Symbol`值，返回`ToPrimitive(x) == y`的结果
12. 返回`false`
