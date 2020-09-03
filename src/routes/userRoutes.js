const express = require('express');
const fs = require('fs');

const userRoutes = express.Router();

function router(nav, users) {
    // userRoutes.route('/sign-up').post((req, res) => {
    //     const {username, password} = req.body;
    //     req.login(req.body);
    // });
    userRoutes.route('/').get((req, res) => {
        res.render('user/index', {
            nav,
            title : 'Book Store',
            users
        });
    });
    return userRoutes;
}
module.exports = router;