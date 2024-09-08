# Run

Download the project zip package for your system from the official website, unzip the package to any directory  
Open the command line in the directory and run:

```shell
cthulhu run # Start the proxy server
cthulhu run -s # Will run as a system proxy
```

## Configuration

**List all configuration items**

```shell
cthulhu config list
```

**Set the value of the configuration**

```shell
cthulhu config set <KEY> <VALUE> 
cthulhu config set <KEY> <VALUE> ... # Set list values e.g.: cthulhu set blackList.list aaa bbb ccc
```

## Generate CA certificate

```shell
cthulhu cagen #The generated CA certificate will be output to the ./ca directory
cthulhu cagen C:/dir #The generated CA certificate will be output to the C:/dir/ca directory
```

## Plugin installation

Install the plugin from the specified directory
Ensure that there is a plugin.json description file in the directory

```shell
cthulhu install <DIR>
```

