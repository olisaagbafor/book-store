const express = require('express');
const fs = require('fs');

const authRoutes = express.Router();

function router(nav, users) {
    authRoutes.route('/sign-up').post((req, res) => {
        const {username, password} = req.body;
        req.login(req.body);
    });
    authRoutes.route('/').get((req, res) => {
        res.render('user/index', {
            nav,
            title : 'Book Store',
            users
        });
    });
    return authRoutes;
}
module.exports = router;