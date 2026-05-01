import http from 'http';

http.get('http://localhost:3000', (res) => {
  let rawData = '';
  res.on('data', (chunk) => { rawData += chunk; });
  res.on('end', () => {
    console.log(`Status: ${res.statusCode}`);
    console.log(`Body: ${rawData}`);
  });
}).on('error', (e) => {
  console.error(`Got error: ${e.message}`);
});
