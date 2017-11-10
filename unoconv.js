const http = require('http');
const exec = require('child_process').exec;
const fs = require('fs');

const qs = require('querystring')

// exec('unoconv -h', (err, stdout, stderr) => {
//   if(err) {
//     console.error(err)
//     process.exit()
//   }
// })

/**
  curl http://localhost:8400/docx/pdf --upload-file yourfile.docx > yourfile.pdf
  curl -T myfile.docx http://localhost:8400/docx/pdf > myfile.pdf
  curl -X PUT --data-binary @myfile.docx http://localhost:8400/docx/pdf > myfile.pdf
**/
const port = process.env.PORT || 9200;

const server = http.createServer((req, res) => {
  let body = '';
  req.on('data', data => {
    // console.log(data.toString())
    body += data
  })
  req.on('end', () => {
    let post = qs.parse(body)
    console.log(post)
    res.end()
  })

  // if(req.method == 'PUT') {
  //   let uri = req.url.split('/')
  //   uri.shift()
  //   let convertFrom = uri.shift()
  //   let convertTo = uri.shift()
  //   let ts = Date.now()
  //   let filepath = `${__dirname}/${ts}.${convertFrom}`
  //   let stream = fs.createWriteStream(filepath)
  //   console.log(filepath)
  //   req.on('data', data => {
  //     stream.write(data)
  //   })
  //   req.on('end', () => {
  //     stream.end()
  //     exec(`unoconv -f ${convertTo} ${filepath}`, (err, stdout, stderr) => {
  //       if(!err) {
  //         let buffer = fs.readFileSync(`${ts}.${convertTo}`)
  //         res.write(buffer, 'binary')
  //         res.end(null, 'binary')
  //         fs.unlinkSync(filepath)
  //         fs.unlinkSync(`${ts}.${convertTo}`)
  //       } else {
  //         console.error(stderr)
  //         fs.unlinkSync(filepath)
  //         res.statusCode = 500
  //         res.write('Internal Server Error')
  //         res.end()
  //       }
  //     })
  //   })
  // } else {
  //   res.statusCode = 400
  //   res.write('Must use PUT method')
  //   res.end()
  // }
})

server.listen(port, err => {
  console.log(`unoconv server listening on port ${port}`)
})
