let http = require('http'),
  url = require('url'),
  handler = (req, res) => {
    let result = url.parse(req.url, true);

    res.writeHead(200, {'Content-Type':'text/html'});
    res.write('<html><body>');
    res.write('<h1>Query String</h1>');
    res.write('<ul>');

    for( var key in result.query ){
      res.write('<li>'+key+' : '+result.query[key]+'</li>');
    }

    res.write('</ul>');
    res.write('</body></html>');
    res.end();
  },
  srv = http.createServer(handler);

srv.listen(3000, () => {
  console.log('Server running on :3000');
});