const express = require('express');
const ejs = require('ejs');

//Intialize express web app using ejs templating engine
const app = express();
app.set('view engine', 'ejs');

//add urlencoded middleware to parse from data
app.use(express.urlencoded({ extended: true }));

// define the home route
app.get('/', (req, res) => {
  res.render('index');
});

// create a /greeting post route with a 'name' parameter
app.post('/greeting', (req, res) => {
  const name = req.body.name;
  res.render('greeting', { name: name });
});

// start the server on port 3000
app.listen(3000, () => {
  console.log('Server started on port 3000');
});

// create a /greeting route that accepts a name parameter
app.get('/greeting/:name', (req, res) => {
  const name = req.params.name;
  res.render('greeting', { name: name });
});

// start the server on port 3000
const port = 3001; // or any other available port
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// create a /greeting route that accepts a name parameter