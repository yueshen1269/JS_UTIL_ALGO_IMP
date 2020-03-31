# webSocket 相关

## 1. webSocket 原理相关

1. [WebSocket 是什么原理？为什么可以实现持久连接？](https://www.zhihu.com/question/20215561)
2. [如何理解 TCP/IP, SPDY, WebSocket 三者之间的关系？](https://www.zhihu.com/question/20097129)

> 由于使用HTTP的端口，因此TCP连接建立后的握手消息是基于HTTP的，由服务器判断这是一个HTTP协议，还是WebSocket协议。 WebSocket连接除了建立和关闭时的握手，数据传输和HTTP没丁点关系了。

## 2. webSocket 心跳重连相关
1. [初探和实现websocket心跳重连](https://www.cnblogs.com/1wen/p/5808276.html) [仓库地址](https://github.com/zimv/websocket-heartbeat-js)
