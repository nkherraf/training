const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

let ticketsRouter = require('./routes/tickets');
let usersRouter = require('./routes/user');

app.use(bodyParser.json());

app
    .use('/tickets', ticketsRouter)
    .use('/users', usersRouter)
    .use((err, req, res, next) => {
        res.json(res.statusCode === 200 ? 500 : res.statusCode, { success: false, error: err.message });
    });


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
