const express = require('express');
const fs = require('fs');

const bookRoutes = express.Router();
const bookController = require('../controllers/bookController');

function router(nav, books) {
    const {index, show, create, store, edit, update, destroy, addQuantity, reduceQuantity} = bookController(nav, books);

    bookRoutes.route('/delete/:id').post(destroy);

    bookRoutes.route('/delete/:id').post(show);

    bookRoutes.route('/create').post(store);

    bookRoutes.route('/create').get(create);

    bookRoutes.route('/return/:id').get(addQuantity);

    bookRoutes.route('/issue/:id').get(reduceQuantity);

    bookRoutes.route('/edit/:id').post(update);

    bookRoutes.route('/edit/:id').get(edit);

    bookRoutes.route('/view/:id').get(show);

    bookRoutes.route('/').get(index);


    return bookRoutes;
}
module.exports = router;