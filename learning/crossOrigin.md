# 跨域

## 定义

> A web application executes a cross-origin HTTP request when it requests a resource that has a different origin (domain, protocol, or port) from its own.

## 为什么要防止跨域

安全问题：如果一个网页可以随意地访问另外一个网站的资源，那么就有可能在客户完全不知情的情况下出现安全问题
比如，Cross Site Request Forgery，简称CSRF，跨站请求伪造。

## 跨域网络访问

同源策略
> The same-origin policy controls interactions between two different origins。These interactions are typically placed into three categories:

1. Cross-origin writes are typically allowed. Examples are links, redirects, and form submissions. Some HTTP requests require preflight.
2. Cross-origin embedding is typically allowed.
   * `<script src="…"></script>`
   * `<link rel="stylesheet" href="…">`
   * `<img>` `video` `audio` `embed`
   * `@font-face`
   * `<iframe>`
3. Cross-origin reads are typically disallowed, but read access is often leaked by embedding. For example, you can read the dimensions of an embedded image, the actions of an embedded script, or the availability of an embedded resource.

## CORS(Cross-Origin Resource Sharing)

> CORS 是W3C 推荐的一种新的官方方案，能使服务器支持 XMLHttpRequest 的跨域请求。CORS 实现起来非常方便，只需要增加一些 HTTP 头，让服务器能声明允许的访问来源。
> 通常使用CORS时，异步请求会被分为简单请求和非简单请求，非简单请求的区别是会先发一次预检请求(preflight)。
> simple requests don’t trigger a CORS preflight

1. 简单请求的情况

   One of the allowed `methods`:
      * GET
      * HEAD
      * POST

   Apart from the headers automatically set by the user agent，the `only headers` which are allowed to be `manually set` are those which the Fetch spec defines as a “CORS-safelisted request-header”, which are:
      * Accept
      * Accept-Language
      * Content-Language
      * Content-Type (but note the additional requirements below)
      * DPR
      * Downlink
      * Save-Data
      * Viewport-Width
      * Width

   The only allowed values for the `Content-Type` header are:
   * application/x-www-form-urlencoded
   * multipart/form-data
   * text/plain

   No event listeners are registered on any XMLHttpRequestUpload object used in the request; these are accessed using the XMLHttpRequest.upload property.

   No ReadableStream object is used in the request.

## 2. Nginx（前端）
