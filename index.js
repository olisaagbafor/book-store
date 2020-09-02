const express = require('express');
const chalk = require('chalk');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/')));
app.use('/dist', express.static(path.join(__dirname, '/node_modules/jquery/dist/')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

const nav = [
    {link: "/books", title:"Books"},
    {link: "/authors", title: "Authors"}
];
const bookRoutes = require('./src/routes/bookRoutes')(nav);

app.use('/books/', bookRoutes);
app.get('/', (request, response) => {
    response.render('index', {
        nav,
        title : 'Book Store'
    });
    // response.sendFile(path.join(__dirname, 'views', 'index.ejs'));
}).listen(3000, () => {
    console.log(`App Listening on port ${chalk.green('3000')}`);
});