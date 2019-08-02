// require( './db' );
const mongoose = require( 'mongoose' );

const express = require('express');
// const path = require('path');
// const fs = require('fs');
// const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use('/view', express.static(__dirname + "/views"));

const server = app.listen(3100,'0.0.0.0', function(){
    console.log("Express server has started on port 3100")
});

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const router = require('./router/main')(app);
