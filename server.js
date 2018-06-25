const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const api_routes = require('./routes/api_routes');

const mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/gt_feb_04');

const port = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'client/build')));

// API Routes
// include '/api' in front of all of these api_routes
app.use('/api', api_routes);

// const routes = require('./routes/api_routes');

// routes(app, connection, data, some_var);

// app.get('/test', (req, res) => {
//   res.json({
//     message: 'Yep, worked!'
//   });
// });

// Catch All Routes that aren't set up
app.get('*', (req, res) => {
  // This is the starting file for React
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));