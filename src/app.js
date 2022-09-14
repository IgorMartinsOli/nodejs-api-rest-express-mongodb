const express = require('express');
const db = require('./config/dbConnect.js')
const livros = require('./models/Livro');

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
    console.log("Conexão com o banco feita com sucesso")
})

const app = express()

app.use(express.json())

/*const livros = [
    {id:1, "titulo": "Senhor dos aneis"},
    {id:2, "titulo": "O Hobbit"}
]*/

app.get('/', (req, res) => {
    res.status(200).json({description: "Curso de node"});
})

app.get('/livros', (req, res) => {
    livros.find((err, livros) => {
        res.status(200).json(livros)
    })
})

app.get('/livros/:id', (req, res) => {
    const index = buscarLivro(req.params.id);
    res.json({livro: livros[index]});
})

app.post('/livros', (req, res) => {
    livros.push(req.body)
    res.status(200).json({description: "livro cadastrado"});
})

app.put('/livros/:id', (req, res) => {
    const index = buscarLivro(req.params.id);

    livros[index].titulo = req.body.titulo;
    res.json({livro: livros});
})

app.delete('/livros/:id', (req, res) => {
    let {id} = req.params;
    const index = buscarLivro(id);

    livros.splice(index, 1);
    res.json(`Livro ${index} removido`);
})

function buscarLivro(id) {
    return livros.findIndex(livro => livro.id == id);
}

module.exports = app;