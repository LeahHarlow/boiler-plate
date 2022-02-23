const express = require('express');
const app = express();

const morgan = require('morgan');
const path = require('path');

const bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, './path/to/static/assets')));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', require('./apiRoutes'));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../index.html')); // I think this is right?
});

app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res
    .status(err.status || 500)
    .send(err.message || `Don't worry an intern was just fired`);
});
