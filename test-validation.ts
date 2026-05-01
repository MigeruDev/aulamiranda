import '@angular/compiler';
import { AngularNodeAppEngine } from '@angular/ssr/node';
import { Request } from 'express';

const angularApp = new AngularNodeAppEngine({ allowedHosts: ['*'], trustProxyHeaders: true });

const req = {
  headers: {
    host: 'localhost:3000'
  },
  url: '/',
  protocol: 'http',
  get: (name) => req.headers[name?.toLowerCase()]
} as unknown as Request;

console.log("Testing with no x-forwarded headers");
angularApp.handle(req).catch(console.error);

