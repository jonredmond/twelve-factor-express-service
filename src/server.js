require('dotenv').config();
const express = require('express');
const app = express();

const routes = require('./routes');

const port = process.env.PORT;

routes.forEach(({ path, router }) => {
  app.use(path, router);
});

app.listen(port, () => {
  console.log('Listening on port: ' + port);
});
