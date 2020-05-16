const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../dist')));

app.use('/api/hotels/:id', createProxyMiddleware({ target: 'http://ec2-18-220-158-65.us-east-2.compute.amazonaws.com:3001', changeOrigin: true }));

app.use('/api/hotels/', createProxyMiddleware({ target: 'http://ec2-18-220-158-65.us-east-2.compute.amazonaws.com:3001', changeOrigin: true }));

app.use('/api/bookings/:id', createProxyMiddleware({ target: 'http://http://ec2-18-191-247-25.us-east-2.compute.amazonaws.com:3002', changeOrigin: true }));

app.use('/api/bookings/', createProxyMiddleware({ target: 'http://ec2-18-191-247-25.us-east-2.compute.amazonaws.com:3002', changeOrigin: true }));

app.use('/about/:id', createProxyMiddleware({ target: 'http://ec2-3-135-240-238.us-east-2.compute.amazonaws.com:3003', changeOrigin: true }));

app.use('/reviews', createProxyMiddleware({ target: 'http://ec2-54-153-71-183.us-west-1.compute.amazonaws.com:3004', changeOrigin: true }));

app.use('/qas', createProxyMiddleware({ target: 'http://ec2-54-153-71-183.us-west-1.compute.amazonaws.com:3004', changeOrigin: true }));

app.use('/roomtips', createProxyMiddleware({ target: 'http://ec2-54-153-71-183.us-west-1.compute.amazonaws.com:3004', changeOrigin: true }));

app.use('/', createProxyMiddleware({ target: 'http://ec2-54-153-71-183.us-west-1.compute.amazonaws.com:3004', changeOrigin: true }));


app.listen(port, () => console.log(`listening on port ${port}`));

