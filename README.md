href
====

middleware providing the current absolute url as req.href

[![build status](https://secure.travis-ci.org/carlos8f/href.png)](http://travis-ci.org/carlos8f/href)

- - -

## Example

```js
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
```

### Developed by [Terra Eclipse](http://www.terraeclipse.com)
Terra Eclipse, Inc. is a nationally recognized political technology and
strategy firm located in Aptos, CA and Washington, D.C.

- - -

### License: MIT

- Copyright (C) 2013 Carlos Rodriguez (http://s8f.org/)
- Copyright (C) 2013 Terra Eclipse, Inc. (http://www.terraeclipse.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the &quot;Software&quot;), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is furnished
to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
