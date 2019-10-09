require('dotenv').config();
const express = require('express');
const app = express();

const todos = require('./routes/todos');

const port = process.env.PORT;

app.use('/todos', todos);

app.listen(port, () => {
  console.log('Listening on port: ' + port);
});
