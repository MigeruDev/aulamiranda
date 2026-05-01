const http = require('http');

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/',
  method: 'GET',
  headers: {
    'Host': 'ais-dev-ezq5cqr3ovmsbbrt4ytytw-696862509283.us-east1.run.app',
    'x-forwarded-host': 'ais-dev-ezq5cqr3ovmsbbrt4ytytw-696862509283.us-east1.run.app',
  }
};

const req = http.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    // console.log(`BODY: ${chunk}`);
  });
  res.on('end', () => {
    console.log('No more data in response.');
  });
});

req.on('error', (e) => {
  console.error(`problem with request: ${e.message}`);
});

req.end();
