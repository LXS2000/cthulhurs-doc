---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "CthulhuRs-Server"
  text: "A high performance HTTP proxy server"
  tagline: 轻量、快速、自定义！！！
  image:
      src: /logo.png
      alt: CthulhuRs
  actions:
    - theme: brand
      text: 快速开始
      link: /zh/guide/命令行
    - theme: alt
      text: 下载
      link: /zh/guide/下载

features:
  - title: http/https、websocket协议的支持
    icon:
        src: /http.png
    details: 任何转发到CthulhuRs服务器上的上述协议的请求，都将被监听
  - title: 私有化部署，保护隐私数据
    icon:
      src: /privacy.png
    details: CthulhuRs服务器由您自己部署在设备上，不会收集您的网络信息上传到第三方，所有的数据都将由您自己处置
  - title: 轻量级&高性能
    icon:
      src: /performance.png
    details: CthulhuRs服务器使用rust高性能语言开发，内置轻量级的quickjs脚本执行引擎，使用无压力
  - title: web、网络指纹修改
    icon:
      src: /fingerprint.png
    details: CthulhuRs服务器支持伪装自己的网络指纹信息，例如ja3、h2指纹、ip地址，您可以在脚本中设置ja3、h2指纹的随机数或者对每个请求设置上游代理。  
        内置的CthulhuJs插件支持修改语言、时区、ua、屏幕、gpu信息、canvas、audio、webgl、webgpu、canvasFonts、cssFonts、plugin、webrtc等浏览器指纹
  - title: 内嵌QuickJS脚本引擎
    icon:
      src: /js.png
    details: QuickJS是一个小型并且可嵌入的Javascript引擎，它支持ES2020规范，包括模块，异步生成器和代理器。 它可选支持数学扩展，例如大整数 (BigInt)，大浮点数 (BigFloat) 以及运算符重载
  - title: 跨平台&跨设备
    icon:
      src: /crossplat.png
    details: 只需要你的设备添加了CthulhuRs服务器的代理，就能在任意设备上的浏览器使用它的功能，无需安装任何软件或扩展
---

