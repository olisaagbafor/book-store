const express = require('express');
const fs = require('fs');

const bookRoutes = express.Router();

const books = [
    {
        title: "My Title 1",
        genre: "The Book's Genre",
        author: "Okoye Idams"
    },
    {
        title: "My Title 2",
        genre: "The Book's Genre",
        author: "Okoye Idams"
    },
    {
        title: "My Title 3",
        genre: "The Book's Genre",
        author: "Okoye Idams"
    },
    {
        title: "My Title 4",
        genre: "The Book's Genre",
        author: "Okoye Idams"
    },
    {
        title: "My Title 5",
        genre: "The Book's Genre",
        author: "Okoye Idams"
    },
    {
        title: "My Title 6",
        genre: "The Book's Genre",
        author: "Okoye Idams"
    }
];
function router(nav) {
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
        var data = fs.readFileSync('./src/lib/books.json');
        var word = JSON.parse(data);
        console.log(word);
        res.render('book/index', {
            nav,
            title : 'Book Store',
            books
        });
    });
    return bookRoutes;
}
module.exports = router;