const fs = require('fs');

function bookController(nav, books)
{
    function storeBooks()
    {
        var input = JSON.stringify(books, null, 2);
        fs.writeFileSync('./src/lib/books.json', input);
        return;
    }


    function index(req, res)
    {
        res.render('book/index', {
            nav,
            title : 'Book Store',
            books
        });
    }


    function show(req, res)
    {
        const {id} = req.params;
        res.render('book/view', {
            nav ,
            title : 'Book Store',
            book: books[id],
            id
        });
    }


    function create(req, res)
    {
        res.render('book/create', {
            nav,
            title : 'Book Store - Add Book'
        })
    }


    function store(req, res)
    {
        books.unshift(req.body);
        storeBooks();
        res.redirect('/books');
    }


    function edit(req, res)
    {
        const {id} = req.params;
        res.render('book/edit', {
            nav,
            title : 'Book Store - Add Book',
            book: books[id],
            id
        })
    }


    function update(req, res)
    {
        const {id} = req.params;
        const {title} = req.body;
        const {quantity} = req.body;
        const {author} = req.body;
        books[id].title = title;
        books[id].quantity = quantity;
        books[id].author = author;
        storeBooks();
        res.redirect(`/books/view/${id}`);
    }


    function confirmDelete(req, res)
    {
        const {id} = req.params;
        res.render('book/destroy', {
            nav ,
            title : 'Book Store',
            book: books[id],
            id
        });
    }


    function destroy(req, res)
    {
        const {id} = req.params;
        books.splice(id, 1);
        storeBooks();
        res.redirect(`/books`);
    }


    function addQuantity(req, res)
    {
        const {id} = req.params;
        books[id].quantity += 1;
        storeBooks();
        res.redirect(`/books/view/${id}`)
    }


    function reduceQuantity(req, res)
    {
        const {id} = req.params;
        books[id].quantity -= 1;
        storeBooks();
        res.redirect(`/books/view/${id}`)
    }

    return {
        index,
        show,
        create,
        store,
        edit,
        update,
        destroy,
        addQuantity,
        reduceQuantity,
        confirmDelete
    }
}

module.exports = bookController;