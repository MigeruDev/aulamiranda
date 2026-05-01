const http = require('http');
http.get('http://localhost:3000/', (res) => {
  let body = '';
  res.on('data', c => body += c);
  res.on('end', () => console.log('Status:', res.statusCode, 'Body:', body));
});
