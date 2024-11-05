const mongoose = require('mongoose')

const book = new mongoose.Schema({
    id : {
        type: Number,
        require: [true, 'Este campo es obligatorio'],
        unique: true
    },
    titulo: {
        type: String,
        require: [true, 'El campo titulo es requerido']
    },
    autor: {
        type: String,
        require: [true, 'El campo titulo es requerido']
    },
    disponible: {
        type: Boolean
    }
}, { collection: 'books' });

const Book = mongoose.model('books', book)

module.exports = Book