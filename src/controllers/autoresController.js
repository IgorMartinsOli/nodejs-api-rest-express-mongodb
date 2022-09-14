const autores = require('../models/Autor.js');

class autorController {
    static listarAutores = (req, res) => {
        autores.find((err, autores) => {
            res.status(200).json(autores);
        })
    }

    static listarAutorPorId = (req, res) => {
        const id = req.params.id;

        autores.findById(id, (err, autores) => {
            if(err){
                res.status(400).json({message: err.message});
            }else{
                res.status(200).json(autores);
            }
        })
    }

    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body);

        autor.save((err, Autor) => {
            if(err){
                res.status(500).json({error: err.message});
            }else{
                res.status(200).json(Autor.toJSON());
            }
        })
    }

    static atualizarAutor = (req, res) => {
        const id = req.params.id

        autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).json({message: "Autor atualizado com sucesso"});
            }else{
                res.status(500).json({message: err.message});
            }
        })
    }

    static excluirAutor = (req, res) => {
        const id = req.params.id

        autores.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).json({message: "Sucesso ao excluir"})
            }else{
                res.status(500).json({message: err.message});
            }
        })
    }
}

module.exports = autorController;