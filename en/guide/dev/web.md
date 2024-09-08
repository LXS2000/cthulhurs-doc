The variables and APIs provided by the CthulhuRs server are consistent in the window and worker environments of the browser.

# scopeId
##
```ts
self['CTHULHU_SCOPE_ID'];//Current scope's Id
```

# CthulhuServer
```ts
function getUrlParams() {
    let params = {}
    if (location.search) {
        location.search.substring(1).split("&").forEach(kv => {
            let [k, v] = kv.split("=");
            if (!k) return;
            if (v) v = decodeURIComponent(v)
            params[k] = v
        })
    }
    return params;
}

self["CTHULHU_SCOPE_ID"] = getUrlParams()["scopeId"]

function post(url, json) {
    return new Promise((rs, rj) => {
        let httpRequest = new XMLHttpRequest();
        httpRequest.open("POST", url, true);
        httpRequest.setRequestHeader("Content-Type", "application/json");
        httpRequest.send(json);
        httpRequest.onreadystatechange = () => {
            if (httpRequest.readyState == 4) {
                if (httpRequest.status == 200) {
                    let data = JSON.parse(httpRequest.responseText);
                    rs(data)
                } else {
                    rj(httpRequest.response)
                }
            }
        }
    })
};
self.CthulhuServer = class Server {
    constructor(id) {
        if (!id) throw new Error("Plugin id cannot be empty")
        this.url = `"https://${id}.plugin.cthulhu.server"`;
        this.scopeId = self['CTHULHU_SCOPE_ID'] || ''
    }

    ask(key, data) {
        let json = JSON.stringify(data);
        let url = `${this.url}/ask?key=${key}&scopeId=${this.scopeId || ''}`
        return post(url, json)
    }
};
```
