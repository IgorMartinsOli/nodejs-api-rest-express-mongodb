const express = require('express');
const livrosController = require('../controllers/livrosController.js')

const router = express.Router();

router
    .get('/livros', livrosController.listarLivros)
    .post('/livros', livrosController.cadastrarLivro)
    .put('/livros/:id', livrosController.atualizarLivro)
    .get('/livros/:id', livrosController.listarLivroPorId)
    .delete('/livros/:id', livrosController.excluirLivro)


module.exports = router;