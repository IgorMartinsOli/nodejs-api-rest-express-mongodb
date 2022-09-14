const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://igor:123@cluster0.y73wbie.mongodb.net/node-express-alura');

const db = mongoose.connection;

module.exports = db;