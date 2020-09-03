const express = require('express');
const fs = require('fs');

const adminRoutes = express.Router();

function router(nav, books) {
    // adminRoutes.route('/:id').get((req, res) => {
    //     const {id} = req.params;
    //     res.render('book/view', {
    //         nav ,
    //         title : 'Book Store',
    //         book: books[id],
    //         id : id
    //     });
    // });
    adminRoutes.route('/add-book').post((req, res) => {
        books.push(req.body);
        var input = JSON.stringify(books, null, 2);
        fs.writeFileSync('./src/lib/books.json', input);
        res.redirect('/books');
    });
    adminRoutes.route('/').get((req, res) => {
        res.render('book/create', {
            nav ,
            title : 'Book Store'
        });
    });
    return adminRoutes;
}
module.exports = router;