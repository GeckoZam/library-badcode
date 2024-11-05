// Problema: Lógica de negocio en el controlador y métodos demasiado largos
const books = require('../models/book');
const bookView = require('../views/bookView');

// Obtener todos los libros
exports.getAllBooks = (req, res) => {
    // Problema: Datos en el controlador, no encapsulados en una capa de servicio
    res.json(books);
};

// Préstamo de un libro por ID
exports.borrowBook = (req, res) => {
    const bookId = parseInt(req.params.id);
    const book = books.find(b => b.id === bookId);

    if (!book) {
        return res.status(404).json({ message: 'Libro no encontrado' });
    }

    if (!book.available) {
        return res.status(400).json({ message: 'El libro ya está prestado' });
    }

    // Problema: Lógica de negocio dentro del controlador
    book.available = false;
    bookView.showBookDetails(book); // Llamada a vista simulada
    res.json({ message: 'Libro prestado exitosamente', book });
};

// Devolución de un libro por ID
exports.returnBook = (req, res) => {
    const bookId = parseInt(req.params.id);
    const book = books.find(b => b.id === bookId);

    if (!book) {
        return res.status(404).json({ message: 'Libro no encontrado' });
    }

    // Problema: Lógica repetitiva
    if (book.available) {
        return res.status(400).json({ message: 'El libro ya está disponible' });
    }

    book.available = true;
    bookView.showBookDetails(book); // Llamada a vista simulada
    res.json({ message: 'Libro devuelto exitosamente', book });
};
