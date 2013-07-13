var href = require('../')
  , server = require('http').createServer()
  , middler = require('middler')

middler(server)
  .add(href)
  .add(function (req, res, next) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(JSON.stringify(req.href, null, 2));
  })

server.listen(3000, function () {
  console.log('server started at http://localhost:3000/');
});

// curl 'http://my:pass@localhost:3000/some/path?blah=1&foo=bar'

/*
{
  "protocol": "http:",
  "auth": "my:pass",
  "host": "localhost:3000",
  "port": "3000",
  "hostname": "localhost",
  "search": "?blah=1&foo=bar",
  "query": "blah=1&foo=bar",
  "pathname": "/some/path",
  "path": "/some/path?blah=1&foo=bar",
  "href": "http://my:pass@localhost:3000/some/path?blah=1&foo=bar"
}
*/
