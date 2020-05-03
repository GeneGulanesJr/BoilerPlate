const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const app = express();
const bodyParser= require('body-parser');
const port = process.env.PORT || 3000;



app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/css')));
app.use('/css', express.static(path.join(__dirname, '/js')));
app.set('views', './src/views');
app.set('view engine', 'ejs');


app.listen(port, () => {
  debug(`listening on port ${chalk.red(port)}`);
});
