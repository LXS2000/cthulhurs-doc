## 插件开发

CthulhuRs内置quickjs引擎，支持用户编写自定义的脚本文件，控制CthulhuRs的行为  
只需编写一个`plugin.json`,然后运行

```shell
cthulhu install ./
```

即可按照`plugin.json`中的描述,为自己的CthulhuRs Server安装一个插件

**`plugin.json`示例**

```json
{
  "name": "CthulhuJs",
  "version": "0.0.1",
  "intro": "CthulhuJs",
  "logo": "./logo.png",
  "web": {
    "root": "./home",
    "index": "index.html"
  },
  "permissions": {
    "netMonitor": true,
    "netModify": 10
  },
  "matches": [
    "*"
  ],
  "script": {
    "server": "./main.js",
    "contents": [
      "./contents/window.js"
    ],
    "worker": "./worker.js",
    "dynamic_links": [
      "scope.browser.js"
    ]
  }
}

```

### 全部字段说明

```
name        : 指定插件的名称（必填）  
version     : 指定插件的版本  
intro       : 插件的介绍  
logo        : 插件的logo图片  
web         : 插件的web,可以和CthulhuRs一起插入到页面中,用来与用户交互    
    root            : web的根目录,当访问 https://<插件ID>.plugin.cthulhu.server/ 时,将会映射到这个目录
    index           : web的首页文档(以web.root指定的路径为主路径),将路径 / 映射到指定的文档文件xxx.html 
permissions : 插件的权限标识
    netMonitor      : 当为true时,插件的服务端脚本可以使用 server.watchRequset、server.watchResponse、server.watchMessage 三个网络监听api
    netModify       : 当值大于0时,插件的服务端脚本可以使用 server.onRequset、server.onResponse、server.onMessage 三个网络修改api
matches     : 当域名不符合数组中的表达式时,将不会被服务器做任何处理，直接放行
script      : 配置插件的各个环境的脚本
    server          : 指定插件的服务端脚本文件
    contents        : 指定的js文件都将会被注入到网页的head中
    worker          : 当网页通过链接注入Worker时,指定的js文件将会被注入其js文件的头部,例如网页注入 /sw.js 的ServiceWorker,CthulhuRs服务器将会拦截sw.js文件 然后将该插件指定的worker js文件写入到sw.js的头部
    dynamic_links   : 数组中的路径将会组成一个链接（https://<插件ID>.plugin.cthulhu.server/dynamic/<link>）,注入到网页的头部以及worker环境，服务端脚本可以通过api server.dynamicScript 给指定的link返回动态的js内容,执行优先级高于content
```
