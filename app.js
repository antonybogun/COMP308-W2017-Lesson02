const connect = require('connect');
const app = connect();

function serverStart(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Server started successfully');
};

function helloWorld(req, res){
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
};

app.use('/hello', helloWorld);
app.use('/', serverStart);

app.listen(3000);

console.log('Server running at http://localhost:3000/');