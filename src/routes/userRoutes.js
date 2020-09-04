const express = require('express');
const fs = require('fs');

const userRoutes = express.Router();
const userController = require('../controllers/userController');

function router(nav) {
    const {
        index,
        show,
        create,
        store,
        edit,
        update,
        destroy,
        confirmDelete
    } = userController(nav);

    userRoutes.route('/delete/:id').get(confirmDelete);

    userRoutes.route('/delete/:id').post(destroy);

    userRoutes.route('/delete/:id').post(show);

    userRoutes.route('/create').post(store);

    userRoutes.route('/create').get(create);

    userRoutes.route('/edit/:id').post(update);

    userRoutes.route('/edit/:id').get(edit);

    userRoutes.route('/view/:id').get(show);

    userRoutes.route('/').get(index);


    return userRoutes;
}
module.exports = router;