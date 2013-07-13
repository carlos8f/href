describe('basic test', function () {
  var server, port;
  before(function (done) {
    server = require('http').createServer();
    middler(server)
      .first(require('expres').middleware)
      .first(href)
      .get(function (req, res, next) {
        res.json(req.href);
      });
    server.listen(0, function () {
      port = server.address().port;
      done();
    });
  });
  it('works', function (done) {
    request({uri: 'http://my:pass@localhost:' + port + '/some/path?blah=1&foo=bar#frag', json: true}, function (err, resp, body) {
      assert.ifError(err);
      assert.equal(resp.statusCode, 200);
      assert.deepEqual(body, {
        protocol: 'http:',
        auth: 'my:pass',
        host: 'localhost:' + port,
        port: String(port),
        hostname: 'localhost',
        search: '?blah=1&foo=bar',
        query: 'blah=1&foo=bar',
        pathname: '/some/path',
        path: '/some/path?blah=1&foo=bar',
        href: 'http://my:pass@localhost:' + port + '/some/path?blah=1&foo=bar',
      });
      done();
    })
  });
});
