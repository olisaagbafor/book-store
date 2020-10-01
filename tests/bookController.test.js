const bookController = require('./../src/controllers/bookController');
const app = require('./../server');
const request = require('supertest');

test('Testing Create Book Route ', async () => {
    await request(app).get('/books/create')
        expect(200)
})

test('Inserting a new Book', async () => {
    await request(app).post('/books/create')
        .send({
            "title" : "Purple Hibiscus",
            "author" : "Chimamanda Ngozi",
            "quantity" : "65"
        })
        expect(200)
})