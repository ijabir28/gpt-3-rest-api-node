const express = require('express');
const { Configuration, OpenAIApi } = require('openai');
const bodyParser = require('body-parser');
require('dotenv').config();



const app = express();

app.use(express.json());
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.get('/api', function (req, res) {
    res.send('OpenAI API')
})

const port = process.env.PORT || 3000;

const listener = app.listen(port, function () {
    console.log('Listening on ' + `http://localhost:${listener.address().port}/api`);
})
