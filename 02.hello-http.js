let http = require('http'),
handler = (req, resp) => {
	resp.writeHead(200, {'Content-Type':'text/html'});
	resp.write('<h1>Be MEAN</h1>');
	resp.end();
},
server = http.createServer(handler);
server.listen(3000, () => {
	console.log('Server running on :3000');
})