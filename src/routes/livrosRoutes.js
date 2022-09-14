const express = require('express');
const livrosController = require('../controllers/livrosController.js')

const router = express.Router();

router
    .get('/livros', livrosController.listarLivros)


module.exports = router;