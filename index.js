const path = require('path');
const PORT = 3000;
// using express as a server
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

// initializing express
const app = express();

// error controller
const errorController = require('./controllers/error');



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// design file
app.use(express.static("public"));

// static file
app.set('view engine', 'ejs');
app.set('views', 'views');

// import routes
const index = require('./routes/index');


// body parsering
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
// accessing uploaded file from uploads
app.use('/uploads', express.static(__dirname + '/uploads'));


// use Routes
app.use(index);
app.use(errorController.get404);

// server listening
app.listen(PORT, () => {
  console.log(`The app start on http://localhost:${PORT}`);
});
