const livros = require('../models/Livro.js');

class livrosController {
    static listarLivros = (req, res) => {
        livros.find()
        .populate('autor', 'nome')
        .exec((err, livros) => {
            res.status(200).json(livros);
        }) 
    }

    static listarLivroPorId = (req, res) => {
        const id = req.params.id;

        livros.findById(id)
        .populate('autor', 'nome')
        .exec((err, livros) => {
            if(err){
                res.status(400).json({message: err.message});
            }else{
                res.status(200).json(livros);
            }
        })
    }

    static cadastrarLivro = (req, res) => {
        let livro = new livros(req.body);

        livro.save((err, livro) => {
            if(err){
                res.status(500).json({error: err.message});
            }else{
                res.status(200).json(livro.toJSON());
            }
        })
    }

    static atualizarLivro = (req, res) => {
        const id = req.params.id

        livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).json({message: "Livro atualizado com sucesso"});
            }else{
                res.status(500).json({message: err.message});
            }
        })
    }

    static excluirLivro = (req, res) => {
        const id = req.params.id

        livros.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).json({message: "Sucesso ao excluir"})
            }else{
                res.status(500).json({message: err.message});
            }
        })
    }

    static listarLivrosPorEditora = (req, res) => {
        const editora = req.params.editora;

        livros.find({editora: editora}, {}, (err, livros) => {
            res.status(200).json(livros);
        })
    }
}

module.exports = livrosController;