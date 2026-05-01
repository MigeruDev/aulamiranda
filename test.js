import express from 'express';
import { reqHandler } from './src/server.js';

const app = express();
app.use(reqHandler);

app.listen(3000, () => {
  console.log('Test server started');
});
