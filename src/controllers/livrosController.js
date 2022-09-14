const livros = require('../models/Livro.js');

class livrosController {
    static listarLivros = (req, res) => {
        livros.find((err, livros) => {
            res.status(200).json(livros)
        })
    }
}

module.exports = livrosController;