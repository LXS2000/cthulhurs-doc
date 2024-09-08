# Global Object
`global`
# Global Variables
## server {#server}
```ts
class Server{
    // Monitor request
    async watchRequest(req:Request,scopeKey:ScopeKey):void|Error{}
    // Monitor response
    async watchResponse(res:Response,scopeKey:ScopeKey):void|Error{}
    // Monitor message
    async watchMessage(msg:Message,scopeKey:ScopeKey):void|Error{}

    // Intercept request
    async onRequest(req:Request,scopeKey:ScopeKey):HttpAction|Error{}
    // Intercept response
    async onResponse(res:Response,scopeKey:ScopeKey):Response|Error{}
    // Intercept message
    async onMessage(msg:Message,scopeKey:ScopeKey):WsAction|Error{}

    // When the web client is injected
    async onClientOpen(sessionType:string,sessionId:string,scopeKey:ScopeKey):void|Error{}
    // When the web client's long connection is disconnected from the server
    async onClientClose(sessionType:string,sessionId:string,scopeKey:ScopeKey):void|Error{}

    // The interface exposed by the server to the outside. When accessing POST https://<plugin ID>.plugin.cthulhu.server/server/ask?key=<Key>&scopeId=<scopeId>,body => value, the request will be forwarded to this function
    async onAsk(key:string,value:any,scopeKey:ScopeKey): { code:number,msg?:string,data?:any }{}
    // Process dynamic js, when accessing GET https://<plugin ID>.plugin.cthulhu.server/dynamic/<link>, the request will be forwarded to this function
    async dynamicScript(link:string,scopeKey:ScopeKey):string|Error{}
    // Dispatch an event in the page corresponding to sessionId
    async sendEvent(sessionId:string,eventType:string,eventBody:object):void|Error{}
    // Send a script to the page corresponding to sessionId and execute it immediately
    async sendScript(sessionId:string,script:string):void|Error{}
    
    // Set the page's csp, return after the server unifies processing
    set csp(v:string){}
}
```
## store {#store}
```ts
class Store{
    // Open or create a new tree database
    openTree(treeName:string):Tree {}
    // Delete a tree database
    dropTree(treeName:string) {}
    // Return the names of all tree databases
    treeNames():[string] {}
}
```
### Tree {#Tree}
```ts
class Tree{
    set(key:string,value:any):void|Error {}
    sets(kvs:object):void|Error {}
    
    get(key:string):any|Error {}
    gets(keys:[string]):object|Error {}
    getWith(prefix:string):object|Error {}
    
    remove(key:string):any|Error {}
    removes(keys:[string]):object|Error {}
    removeWith(prefix:string):object|Error {}
    
    clear():void|Error {}
    keys():[string]|Error {}
    contains(key:string):boolean|Error {}
    // Traverse values with a specified key prefix
    iterWith(prefix:string,fn:(key:string,value:any)=>void):object|Error {}
    // Count the number of keys with a specified prefix
    countWith(prefix:string):number|Error {}

    // Manually write all operations to the hard disk
    flush():void|Error {}
    // Start a transaction
    transaction(key:string,fn:()=>any):any|Error {}
}
```

## console {#console}
```ts
class Console {
    log(msg:any):void|Error{}
    debug(msg:any):void|Error{}
    warn(msg:any):void|Error{}
    error(msg:any):void|Error{}
}
```

# HTTP api
HTTP protocol related api

## Uri {#Uri}
URI object
```ts
class Uri {
    constructor(url:string):Uri {}
    get scheme():string{}
    get authority():string{}
    get port():number|-1{}
    get host():string{}
    get path():string{}
    get params():object{}
}
```

## Headers {#Headers}
HTTP request/response headers
```ts
class Headers {
    constructor():Headers {}

    /**
     * Get the corresponding header value by key
     * @param key header key
     */
    get(key: string): string | undefined {}

    /**
     * Set the value corresponding to the header key, there will only be one header key
     * @param key header key
     * @param value header value
     */
    insert(key: string, value: string) {}

    /**
     * Set the value corresponding to the header key, allowing multiple identical header keys to exist
     * @param key header key
     * @param value header value
     */
    append(key: string, value: string) {}

    /**
     * Delete all corresponding header values by key
     * @param key header key
     */
    remove(key: string): string | undefined {}

    /**
     * Return all header keys
     */
    keys(): [string] {}

    /**
     * Clear header
     */
    clear() {}
}

```
## Body {#Body}
HTTP request/response body
```ts
class Body {
    static empty(): Body {}
    static str(s:string): Body {}
    static bytes(s:Uint8Array): Body {}
    static file(file:File): Body {}
    async toBytes():Uint8Array|Error{}
}

```

## Request {#Request}
HTTP request
```ts
class Request {
  constructor(method?: string, url?: string, headers?: object, body?:Body): Request | Error {}

  /**
   * GET,POST,PUT,DELETE.OPTION,CONNECT,HEAD,TRACE,PATCH
   * @param v
   */
  set method(v: string) {}

  get method(): string {}

  set uri(v: string) {}

  get uri(): Uri {}

  /**
   * HTTP/0.9 HTTP/1.0 HTTP/1.1 HTTP/2.0 HTTP/3.0
   * @param v
   */
  set version(v: string) {}

  get version(): string {}

  set headers(v: Headers) {}

  get headers(): Headers {}
    
  set body(v: Body) {}

  get body(): Body {}
}

```

## Response {#Response}
HTTP response
```ts
class Response {
    constructor(status?: number, headers?: object, body?:Body): Response | Error {}

    set status(v: number) {}

    get status(): number {}

    /**
     * HTTP/0.9 HTTP/1.0 HTTP/1.1 HTTP/2.0 HTTP/3.0
     * @param v
     */
    set version(v: string) {}

    get version(): string {}

    set headers(v: Headers) {}

    get headers(): Headers {}

    set body(v: Body) {}

    get body(): Body {}
}

```

## HttpAction {#HttpAction}
Operations on the http request
```ts
class HttpAction {
    // Intercept the request and the server returns 500
    static reject(): HttpAction {}
    // Let this request go
    static release(req: Request): HttpAction {}
    // Respond to this request directly
    static respond(res: Response): HttpAction {}
    // Add a proxy to this request and then let it go
    static proxy(req: Request, cfg: { proxy: string, ja3: number, h2: number } | undefined): HttpAction {}
}

```
## fetch {#fetch}
Initiate an http request
```ts
async function fetch(req: Request, cfg: { proxy: string, ja3: number, h2: number } | undefined): Response | Error {}
```
# WebSocket api

## FrameHeader {#FrameHeader}
FrameHeader frame message header

```ts
class FrameHeader {
    /**
     *
     * @param isFinal Indicates that this frame is the last one in a possibly segmented message.
     * @param rsv1 rsv2 rsv3 Reserved for protocol extension.
     * @param opcode WebSocket protocol opcode e.g. "data:continue" "control:pong"
     *      data:continue|text|binary
     *      control:close|ping|pong
     * @param mask Mask (optional), length is 4
     */
    constructor(isFinal:boolean,rsv1:boolean,rsv2:boolean,rsv3:boolean,opcode:string,mask?:Int8Array) {}
}
```

## Message {#Message}
WebSocket message
```ts
class Message {
    static text(msg: string): Message {}

    static binary(msg: Int8Array): Message {}

    static frame(header: FrameHeader, payload: Int8Array): Message {}

    toText(): string | Error {}

    toBytes(): Int8Array {}

    type(): string {}
    
    len(): number {}
}
```
## WsAction {#WsAction}
Operations on the WebSocket message

```ts
class WsAction{
    static ignore():WsAction{}
    static release(msg:Message):WsAction{}
    static respond(msg:Message):WsAction{}
}
```


# File Related

## Metadata {#Metadata}
Metadata for files or directories

```ts
class Metadata {
    isFile():boolean{}
    isDir():boolean{}
    isSymlink():boolean{}
    lastAccessTime():number{}
    lastWriteTime():number{}
    creationTime():number{}
    fileSize():number{}
    len():number{}
}

```
## Path {#Path}
Path for files or directories

```ts
class Path {
    constructor(path: string): Path{}

    isFile(): boolean {}
    isDir(): boolean {}
    isSymlink(): boolean {}
    isAbsolute(): boolean {}
    isRelative(): boolean {}
    
    extension(): string|undefined {}
    fileName(): string|undefined {}
    fileStem(): string|undefined {}
    metadata(): Metadata|undefined {}

    toPath(base:string): Path|Error {}
    toLogicalPath(base:string): Path|Error {}
    
    exists(): boolean {}
}
```

## File {#File}
File object
```ts
type OpenCfg = {
    read?: boolean,
    write?: boolean,
    append?: boolean,
    create?: boolean,
    createNew?: boolean,
    truncate?: boolean,
};

class File {
    constructor(path: string, cfg?: OpenCfg): File | Error {}

    metadata(): Metadata {}

    async writeBytes(bytes: Int8Array): void | Error {}

    async readBytes(): Int8Array | Error {}
}
```

# General Classes
## Scope  {#Scope}
Client Domain
```ts
class Scope{
    get id():string{}
    // Client IP
    get ip():string{}
    // Page protocol http https
    get scheme():string{}
    // Page domain
    get host():string{}
    // Client UA
    get ua():string{}
    // User email
    get email():string{}
    // Window ID
    get window():string{}
    // Page ID
    get tab():string{}
    // Frame ID
    get frame():string{}
    // Custom value
    get custom():string{}
}
```

## StrUtils  {#StrUtils}
String Utility Class
```ts
class StrUtils{
    // Hash a string into a string of specified length
    static hashstr(str:string,size:number):string{}
    static strToBytes(str:string):Int8Array{}
    static bytesToUtf8(bytes:Int8Array):Int8Array{}
    // Match * ? two types of pattern strings
    static miniMatch(pattern: string, target: string):boolean{}

    static urlDecode(text: string):string{}
    static urlEncode(text: string):string{}

    static base64Decode(bytes: Int8Array):string{}
    static base64Encode(text: string):string{}
}
```
