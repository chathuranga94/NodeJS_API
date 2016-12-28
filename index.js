//NodeJS API entry point
const express = require('express');  
const app = express();
const port = 3000;

// Local imports
var defaultCtrl = require('./controllers/default_controller');

// Routes and its handlers
app.get('/', defaultCtrl.handler);


// Starting server
app.listen(port, (err) => {  
  if (err) {
    return console.log('Err : Server could not start', err)
  }

  console.log(`Server is listening on localhost:${port}`)
})