# http2.0

1. 头部压缩
2. 服务端推送
3. 多路复用

流和帧的概念

报文结构 前九个字节
24bit Length 帧长
8bit  Type 帧类型  Header Data等
8bit  Flags 帧标志
1bit  R 保留位
31bit Stream Identifier 流唯一ID

...  Frame Payload
