const express = require('express');
const fs = require('fs');

const bookRoutes = express.Router();

// var data = fs.readFileSync('./src/lib/books.json');
// var word = JSON.parse(data);
// console.log(word);
function router(nav, books) {
    bookRoutes.route('/:id').get((req, res) => {
        const {id} = req.params;
        res.render('book/view', {
            nav ,
            title : 'Book Store',
            book: books[id],
            id : id
        });
    });
    bookRoutes.route('/').get((req, res) => {
        res.render('book/index', {
            nav,
            title : 'Book Store',
            books
        });
    });
    return bookRoutes;
}
module.exports = router;