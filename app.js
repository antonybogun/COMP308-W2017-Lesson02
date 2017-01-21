let connect = require('connect');

let app = connect();
const port = 3000;

app.use('/hello', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

app.use('/', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Server started successfully');
});

app.listen(3000);

console.log('Server running at http://localhost:' + port + '/');