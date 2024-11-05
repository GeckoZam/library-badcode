// Problema: Lógica de presentación limitada y no reutilizable en diferentes vistas
exports.showBookDetails = (book) => {
    console.log(`Libro: ${book.title}, Autor: ${book.author}, Disponible: ${book.available}`);
};
