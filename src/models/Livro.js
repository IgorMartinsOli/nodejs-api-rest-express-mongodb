const mongoose = require('mongoose')

const livroSchema = new mongoose.Schema({
    id: {type: String,
    },
    title: {
        type: String,
        required: true
    },
    autor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'autores',
        required: true
    },
    editora: {
        type: String,
        required: true
    },
    numeroPaginas: {type: Number}
})

const livros = mongoose.model('livros', livroSchema)

module.exports = livros;