const fs = require('fs');
const users = Object.values(JSON.parse(fs.readFileSync('./src/lib/users.json')));

function userController(nav)
{
    function storeUsers()
    {
        var input = JSON.stringify(users, null, 2);
        fs.writeFileSync('./src/lib/users.json', input);
        return;
    }


    function index(req, res)
    {
        res.render('user/index', {
            nav,
            title : 'Book Store - All Users',
            users
        });
    }


    function show(req, res)
    {
        const {id} = req.params;
        res.render('user/view', {
            nav ,
            title : 'Book Store - User Profile',
            user: users[id],
            id
        });
    }


    function create(req, res)
    {
        res.render('user/create', {
            nav,
            title : 'Book Store - Add User'
        })
    }


    function store(req, res)
    {
        users.unshift(req.body);
        storeUsers();
        res.redirect('/users');
    }


    function edit(req, res)
    {
        const {id} = req.params;
        res.render('user/edit', {
            nav,
            title : 'Book Store - Add User',
            user: users[id],
            id
        })
    }


    function update(req, res)
    {
        const {id} = req.params;
        users[id] = req.body;
        storeUsers();
        res.redirect(`/users`);
    }


    function confirmDelete(req, res)
    {
        const {id} = req.params;
        res.render('user/destroy', {
            nav ,
            title : 'Book Store - Delete User',
            user: users[id],
            id
        });
    }


    function destroy(req, res)
    {
        const {id} = req.params;
        users.splice(id, 1);
        storeUsers();
        res.redirect(`/users`);
    }

    return {
        index,
        show,
        create,
        store,
        edit,
        update,
        destroy,
        confirmDelete
    }
}

module.exports = userController;