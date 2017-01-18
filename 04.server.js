'use strict';

let date = (new Date()).toJSON();

const http = require('http'),
  SUCCESS = {
    version : 1.0,
    name : 'Be MEAN',
    returned_at : date
  },
  ERROR = {
    message : 'Deu Merda!!!'
  }

let handler = (req, res) => {
  if( req.url === '/api/v1' ){
    res.writeHead(200, {'Content-Type':'application/json'});
    res.write(JSON.stringify(SUCCESS));
  }else{
    res.writeHead(404, {'Content-Type':'application/json'});
    res.write(JSON.stringify(ERROR));
  }
  res.end();
},
srv = http.createServer(handler);

srv.listen(3000, () => {
  console.log('Server is running on :3000');
});