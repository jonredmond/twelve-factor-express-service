const express = require('express');
const mysql = require('mysql');

const todoDbService = require('../services/todo-db');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const rows = await todoDbService.findTodoByUser(req.query.user);
    res.send(rows);
  } catch (err) {
    res.status(500);
    res.send(err);
  }
});
router.post('/', (req, res) => {});
router.put('/:id', (req, res) => {});

module.exports = router;
