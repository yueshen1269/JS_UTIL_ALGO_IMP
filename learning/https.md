# https 相关

1. 对称加密和非对称加密(RSA)
   加密算法：用同一个密钥进行加密和解密（如异或算法 a^b^b=a)，加密和解密算法是公开的，密钥是私有的
   非对称加密：通信双发持有对方的公钥，然后用对方的公钥对数据加密后传输，对接受到的数据使用自己的私钥解密
    双方必须协商一个保密的密钥， 而是有一对钥匙， 一个是保密的，称为私钥，另外一个是公开的，称为公钥。
    用私钥加密的数据，只有对应的公钥才能解密，用公钥加密的数据， 只有对应的私钥才能解密

2. 中间人攻击
   在公钥传输过程中，中间人拦截到服务器发来的公钥，然后改变其中的公钥为自己的，再发送给客户端，客户端用
   中间人伪造的公钥对数据加密，这样中间人就可以用自己的私钥对数据解密，然后再用服务器发来的公钥重新加密，
   发送给服务器，对客户端和服务端透明

3. https请求过程
   1. 客户端请求，获得服务器的数字证书，数字证书包含public key
   2. 客户端用预置的CA列表对证书进行校验
   3. 校验成功后，客户端生成随机的对称密钥，并用收到的public key进行加密，然后发送给服务器
   4. 服务器收到客户端加密后的对称密钥，用其私钥进行解密
   5. 服务器和客户端之间的交互用这个对称密钥进行加密后传输，对接收到的数据用这个对称密钥解密