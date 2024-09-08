## Plugin Development

CthulhuRs has a built-in quickjs engine, which allows users to write custom script files to control the behavior of CthulhuRs.  
You only need to write a `plugin.json`, and then run

```shell
cthulhu install ./
```

Then, according to the description in `plugin.json`, you can install a plugin for your own CthulhuRs Server.

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

### Explanation of all fields

```
name        : Specifies the name of the plugin (required)  
version     : Specifies the version of the plugin  
intro       : Introduction of the plugin  
logo        : Logo image of the plugin  
web         : The web of the plugin, which can be inserted into the page with CthulhuRs to interact with the user    
    root            : The root directory of the web. When accessing https://<plugin ID>.plugin.cthulhu.server/, it will be mapped to this directory
    index           : The home document of the web (with the path specified by web.root as the main path), maps the path / to the specified document file xxx.html 
permissions : The permission flag of the plugin
    netMonitor      : When true, the server-side script of the plugin can use the three network monitoring APIs server.watchRequset, server.watchResponse, server.watchMessage
    netModify       : When the value is greater than 0, the server-side script of the plugin can use the three network modification APIs server.onRequset, server.onResponse, server.onMessage
matches     : When the domain name does not match the expressions in the array, it will not be processed by the server and will be directly released
script      : Configure the scripts of various environments of the plugin
    server          : Specifies the server-side script file of the plugin
    contents        : The specified js files will all be injected into the head of the webpage
    worker          : When the webpage injects Worker through a link, the specified js file will be injected into the head of its js file. For example, when the webpage injects the ServiceWorker of /sw.js, the CthulhuRs server will intercept the sw.js file and then write the specified worker js file of the plugin into the head of sw.js
    dynamic_links   : The paths in the array will form a link (https://<plugin ID>.plugin.cthulhu.server/dynamic/<link>), injected into the head of the webpage and the worker environment. The server-side script can use the api server.dynamicScript to return dynamic js content to the specified link, and the execution priority is higher than content
```
