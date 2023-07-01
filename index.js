const express = require('express');
const port = 8000;
const app = express();
const path = require('path');
const db = require('./config/mongoose');

const express_layouts = require('express-ejs-layouts');
const cookieParser = require('cookie-parser');

app.use(express.urlencoded());
app.use(cookieParser());
app.use(express_layouts);

app.use('/', require('./routes'));
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


// EJS template setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + "/assets"));
app.listen(port, function(err) {
  if (err) {
    return console.log("Error:", err);
  } else {
    console.log("Server is up at port:", port);
  }
});
