const express = require('express');
const mysql = require('mysql');

const router = express.Router();

router.get('/', (req, res) => {
  const connection = mysql.createConnection({
    host: '35.246.64.183',
    user: 'sapient.grads',
    password: 'sapient2019',
    database: 'todo_db'
  });

  connection.connect();

  connection.query(
    'SELECT * FROM tbl_todo WHERE user="' + req.query.user + '"',
    (err, rows, fields) => {
      if (err) {
        res.sendStatus(500);
        res.send(err);
      }

      res.send(rows);
      connection.end();
    }
  );
});
router.post('/', (req, res) => {});
router.put('/:id', (req, res) => {});

module.exports = router;
