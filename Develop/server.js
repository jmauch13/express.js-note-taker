const PORT = process.env.PORT || 3001;
const fs = require('fs');
const path = require('path');

// express dependency and server
const express = require('express');
const app = express();

// route files
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// listener
app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });