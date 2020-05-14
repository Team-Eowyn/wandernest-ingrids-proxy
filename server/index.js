const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 3000;

app.use(express.static('dist'));
app.use('/:id', express.static('dist'));

app.use('/api/bookings/:id', createProxyMiddleware({ target: 'http://localhost:3002/bundle.js', changeOrigin: true }));
app.use('/about/:id', createProxyMiddleware({ target: 'http://localhost:3003/bundle.js', changeOrigin: true }));
app.use('/api/hotels/:id', createProxyMiddleware({ target: 'http://localhost:3001/bundle.js', changeOrigin: true }));
app.use('/reviews', createProxyMiddleware({ target: 'http://localhost:3004/bundle.js', changeOrigin: true }));
app.use('/qas', createProxyMiddleware({ target: 'http://localhost:3004/bundle.js', changeOrigin: true }));
app.use('/roomtips', createProxyMiddleware({ target: 'http://localhost:3004/bundle.js', changeOrigin: true }));
app.use('/', createProxyMiddleware({ target: 'http://localhost:3004/bundle.js', changeOrigin: true }));


app.listen(port, () => console.log(`listening on port ${port}`));

