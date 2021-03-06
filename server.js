const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/')));
app.use('/dist', express.static(path.join(__dirname, '/node_modules/jquery/dist/')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

var books = Object.values(JSON.parse(fs.readFileSync('./src/lib/books.json')));
const nav = [
    {link: "/books", title:"Books"},
    {link: "/books/create", title:"Add New Book"},
    {link: "/users", title: "Users"},
    {link: "/admin", title: "Admin"}
];
const bookRoutes = require('./src/routes/bookRoutes')(nav, books);
const userRoutes = require('./src/routes/userRoutes')(nav);
const adminRoutes = require('./src/routes/adminRoutes')(nav, books);

app.use('/books/', bookRoutes);
app.use('/users/', userRoutes);
app.use('/admin/', adminRoutes);
app.get('/', (request, response) => {
    response.render('index', {
        nav,
        title : 'Book Store',
        books
    });
    // response.sendFile(path.join(__dirname, 'views', 'index.ejs'));
});

module.exports = app;