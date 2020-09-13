const baseUrl = 'https://192.248.22.198';
//http://localhost:5000/api/accounts

const express = require('express');
const http = require('http');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios').default;
const fs = require('fs');
const cors = require('cors');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const PORT = 5000;
const server = http.Server(app);
server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

const { createProxyMiddleware } = require('http-proxy-middleware');

app.use(cors());
app.use(
  '/api',
  createProxyMiddleware({
    target: baseUrl,
    changeOrigin: true,
    secure: false,
  })
);
