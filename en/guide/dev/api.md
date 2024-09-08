# Configuration Interface
## get
```http request
### Get the specified configuration value
GET https://api.cthulhu.server/config/get?key={{key}}
Accept: application/json
```

## list
```http request
### Get all configurations
GET https://api.cthulhu.server/config/list
Accept: application/json

```
## update
```http request
### update configuration value by id
POST https://api.cthulhu.server/config/update
Content-Type: application/json
Accept: application/json

{
 "id":{{id}},
 "value":{{value}}
}
```


# 插件接口

## list
```http request
###  Get all plugin lists
GET https://api.cthulhu.server/plugin/list?key={{key}}&isEnable={{isEnable}}
Accept: application/json
```

## enable
```http request
### Enable or disable plugin
GET https://api.cthulhu.server/plugin/enable?id={{id}}
Accept: application/json

```
## del
```http request
### Delete plugin
GET https://api.cthulhu.server/plugin/del?id={{id}}
Accept: application/json
```

## log
```http request
### Get plugin logs  
GET https://api.cthulhu.server/plugin/log?id={{id}}&level={{level}}&index={{index}}
Accept: application/json
```

## clearLog
```http request
### Clear plugin logs  
GET https://api.cthulhu.server/plugin/clearLog?id={{id}}&level={{level}}
Accept: application/json
```


## reload
```http request
### Reload plugin from installation directory  
GET https://api.cthulhu.server/plugin/reload?id={{id}}
Accept: application/json
```

## treeNames
```http request
### Get plugin's Tree database name list 
GET https://api.cthulhu.server/plugin/treeNames?id={{id}}
Accept: application/json
```

## treeList
```http request
### Get data of specified Tree database of the plugin
GET https://api.cthulhu.server/plugin/treeList?id={{id}}&tree{{tree}}
Accept: application/json
```


# 其他接口

## ask
Call the [server.onAsk](/en/guide/dev/server.html#server) of the specified plugin
```http request
### Call the onAsk interface of the specified plugin
POST https://{{id}}.plugin.cthulhu.server/server/ask?key{{key}}&scopeId={{scopeId}}
Content-Type: application/json
Accept: application/json

{
  any...
}
```

## restart
```http request
### Restart server
GET https://api.cthulhu.server/server/restart

```
## downloadCa
```http request
### Download CA certificate
GET https://api.cthulhu.server/server/downloadCa

```
## CthulhuRs Server web

```http request
### Get static resources or web pages from the workspace directory configured by the server
GET https://web.cthulhu.server/...

```


## socket
```http request
### Connect to the websocket of CthulhuRs server
GET wss://socket.cthulhu.server/{{session}}/{{scopeId}}

```

## Plugin Dynamic JS
Call the [server.dynamicScript](/en/guide/dev/server.html#server) of the specified plugin
```http request
### Plugin Dynamic JS
GET https://{{id}}.plugin.cthulhu.server/dynamic/{{link}}

```

## Plugin Web
Get static resources or web pages from the web.root directory of the specified plugin
```http request
### Access the web resources of the plugin
GET https://{{id}}.plugin.cthulhu.server/...

```



