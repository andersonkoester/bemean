let http = require('http'),
fs = require('fs'),
index = fs.readFileSync('01.index.html')
handler = (req, resp) => {
	resp.writeHead(200, {'Content-Type':'text/html'});
	resp.end(index);
},
server = http.createServer(handler);
server.listen(3000, () => {
	console.log('Server running on :3000');
})