const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Definición de rutas de libros
router.get('/', bookController.getAllBooks);
router.post('/borrow/:id', bookController.borrowBook);
router.post('/return/:id', bookController.returnBook);

module.exports = router;
