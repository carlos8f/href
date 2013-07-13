var url = require('url');

module.exports = function href (req, res, next) {
  if (!req.href) {
    var proto = (req.headers['x-forwarded-proto'] || '').match(/^https/i) || req.connection.encrypted ? 'https' : 'http';
    var auth = (req.headers['authorization'] || '').match(/^Basic (.*)/i);
    if (auth) try { auth = Buffer(auth[1], 'base64').toString() } catch (e) { auth = null };
    req.href = url.parse(req.url);
    req.href.protocol = proto;
    req.href.auth = auth;
    req.href.host = req.headers['host'];
    req.href = url.parse(url.format(req.href));
    delete req.href.slashes;
    delete req.href.hash;
    req.href.toString = function () {
      return this.href;
    };
  }
  next();
};
