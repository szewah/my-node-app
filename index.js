require('dotenv').config();

const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
// || javascript 'or' operator
app.use(express.static('public'))

app.use(function(req, res, next) {
  console.log('Request made to: ' + req.originalUrl)
  next()
})

app.get('/', (req, res) => {
	res.send('index.html');
});

app.get('/test', (req, res) => {
  	res.send('This is a test!');
});

app.listen(port, () => {
	console.log(`listening on port ${ port }`);
});











