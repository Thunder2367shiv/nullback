require('dotenv').config();

const express = require("express");

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send("hello world!");
});

// donot forget to write "/"
app.get('/twitter', (req, res) => {
    res.send("hiteshdotcom");
});

app.get('/login', (req, res) => {
    res.send(`<h1>welcome to login page</h1>`);
});

app.listen(port, () => console.log(`Server running on port ${port}`));