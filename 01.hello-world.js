let http = require('http'),
handler = (req, resp) => {
	resp.writeHead(200, {'Content-Type':'text/plain'});
	resp.write('Be MEAN');
	resp.end();
},
server = http.createServer(handler);
server.listen(3000, () => {
	console.log('Server running on :3000');
})


