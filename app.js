const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const open_ai_router = require('./routes/open_ai');

app.use(express.json());
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.get('/api', function (req, res) {
    res.send('OpenAI API')
})

app.use('/api/openai', open_ai_router);

const port = process.env.PORT || 3000;

const listener = app.listen(port, function () {
    console.log('Listening on ' + `http://localhost:${listener.address().port}/api`);
})
