const express = require('express');
const chalk = require('chalk');
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const fs = require('fs');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ secret:'library'}));
//require('./src/config/passport.js')(app);
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/')));
app.use('/dist', express.static(path.join(__dirname, '/node_modules/jquery/dist/')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

var books = Object.values(JSON.parse(fs.readFileSync('./src/lib/books.json')));
var users = Object.values(JSON.parse(fs.readFileSync('./src/lib/users.json')));
const nav = [
    {link: "/books", title:"Books"},
    {link: "/authors", title: "Authors"},
    {link: "/admin", title: "Admin"}
];
const bookRoutes = require('./src/routes/bookRoutes')(nav, books);
const authRoutes = require('./src/routes/authRoutes')(nav, users);
const adminRoutes = require('./src/routes/adminRoutes')(nav, books);

app.use('/books/', bookRoutes);
app.use('/auth/', authRoutes);
app.use('/admin/', adminRoutes);
app.get('/', (request, response) => {
    response.render('index', {
        nav,
        title : 'Book Store',
        books
    });
    // response.sendFile(path.join(__dirname, 'views', 'index.ejs'));
}).listen(3000, () => {
    console.log(`App Listening on port ${chalk.green('3000')}`);
});