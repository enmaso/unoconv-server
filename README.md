# unoconv-server
> Lightweight Nodejs unoconv server

## Requirements
* LibreOffice or OpenOffice
* unoconv

```
> sudo apt-get install libreoffice
> sudo apt-get install libreoffice-writer2latex
> sudo apt-get install unoconv
```

## Running unoconv in background
```
unoconv --listener &
```

## Configure
```
nano config.js
```
Change **port** to whatever

## Using the server
```
curl -T yourfile.html localhost:9000/html/pdf > yourfile.pdf
```
First query hash is the file type you are converting, the second hash is the file type you are converting to.

In the above example, you are converting from **html** to **pdf**

Make sense? Good.

## TODO
List the supported file types


## License
MIT or GPL-3.0, see LICENSE file
