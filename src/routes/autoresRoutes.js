const express = require('express');
const autorController = require('../controllers/autoresController.js')

const router = express.Router();

router
    .get('/autores', autorController.listarAutores)
    .post('/autores', autorController.cadastrarAutor)
    .put('/autores/:id', autorController.atualizarAutor)
    .get('/autores/:id', autorController.listarAutorPorId)
    .delete('/autores/:id', autorController.excluirAutor)


module.exports = router;