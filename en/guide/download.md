# Server Download

## Windows System Download
64-bit：[CthulhuRs-x86_64-pc-windows-gnu.zip](https://server.cthulhu.fun/releases/CthulhuRs-x86_64-pc-windows-gnu.zip)  
32-bit：[CthulhuRs-i686-pc-windows-msvc.zip](https://server.cthulhu.fun/releases/CthulhuRs-i686-pc-windows-msvc.zip)


## Linux System Download
64-bit：[CthulhuRs-x86_64-unknown-linux-gnu.zip](https://server.cthulhu.fun/releases/cthulhu-x86_64-unknown-linux-gnu.zip)


---

# Cthulhu-Scope-Extension Browser Plugin Download

This plugin is used in conjunction with the CthulhuRs Server
After the plugin is enabled, it will add a special request header `Cthulhu-Extra-Scope` to all requests in the browser through configuration, to achieve different levels or combined domain control, the value is the following four Scope properties:

| Property | Function | Domain Control Level |
|----------|:--------:|---------:|
| `email`  | Add the email of the currently logged in user in the browser | `User Level` |
| `window` | Add the window Id of the current page in the browser | `Window Level` |
| `tab`    | Add the tabId of the current page in the browser | `Page Level` |
| `frame`  | Add the frameId of the browser request (only supported on browser versions that support the v2 extension protocol) | `Frame Level` |
| `custom` | Add a custom string, used in scenarios where more special domain control is needed | `Custom Level` |

> [!TIP]
> If you do not use this plugin, the server can only achieve `device + browser + domain name` level domain control, that is, based on the `source IP address` and `protocol type` of the request, and the `Host`
> and `User-Agent` in the request header together form a `Scope`


> [!NOTE]
> `Scope` is used to identify the source 'identity' of the request, requests with the same `Scope` will be regarded as a whole, and have the same `scopeId`

v3 extension protocol：[Cthulhu-Scope-Extension-v3.zip](https://server.cthulhu.fun/releases/Cthulhu-Scope-Extension-v3.zip)  
v2 extension protocol：[Cthulhu-Scope-Extension-v2.zip](https://server.cthulhu.fun/releases/Cthulhu-Scope-Extension-v2.zip)  

---
# Useful Plugin Download

[//]: # (## CthulhuJs)

[//]: # (Pure js modifies page and network fingerprints, supports:  )

[//]: # (canvas, audio, webgl, webgpu, plugin, cssFonts, canvasFonts, webrtc, screen, gpu, memory, cpu core number, language, time zone, ua, ja3, h2 and other fingerprint modifications    )

[//]: # ([Click to download]&#40;https://server.cthulhu.fun/releases/plugins/CthulhuJs.zip&#41;)

[//]: # (After decompression, execute the following command to install:)

[//]: # (```shell)

[//]: # (cthulhu install .\CthulhuJs)

[//]: # (```)


## VConsole
Tencent’s official open-source web debugging tool  
A lightweight, expandable, front-end developer debugging panel for mobile web pages.  
vConsole is framework-independent and can be used in Vue, React or any other framework.  
Now vConsole is the official debugging tool for WeChat Mini Programs.  
[Click to download](https://server.cthulhu.fun/releases/plugins/VConsole.zip)  
After decompression, execute the following command to install:  
```shell
cthulhu install .\VConsole
```


## Rginx
A simple replica of nginx, supports reverse proxy, load balancing, file mapping  
Click to download After decompression, execute the following command to install:  
[Click to download](https://server.cthulhu.fun/releases/plugins/Rginx.zip)  
After decompression, execute the following command to install:  
```shell
cthulhu install .\Rginx
```

