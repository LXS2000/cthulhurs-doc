#  Generate a new CA certificate (The zip package comes with a certificate, this step is optional)
```shell
cthulhu cagen ./
```
cthulhu.key  
cthulhu.cer  
The CA certificate will be generated in the ./ca/ directory

# Set up the CA certificate
```shell
cthulhu config set certificate.key ./ca/cthulhu.key
cthulhu config set certificate.cert ./ca/cthulhu.cer
```

# Install the CA certificate
## Download the CA certificate
Visit `http://api.cthulhu.server/server/downloadCa` in your browser The download of the cthulhu.cer file will start


# Trust the CA certificate
## Windows system
Double-click the certificate file `cthulhu.cer`, click install, and then put the certificate in the `Trusted Root Certification Authorities store`

## Ios system
Visit the link above in the Safari browser, a pop-up window will appear when the download is complete   
[Apple’s official CA certificate setting tutorial](https://support.apple.com/zh-cn/102390)
## Android system
Different brands of mobile phone systems may vary, but generally, they are in the settings. Try to search for certificates in the settings, then find the relevant settings, install the just downloaded certificate file from the file, and then fully trust it

# Start the server
```shell
cthulhu run
cthulhu run -s # Run as a system proxy
```
