require('dotenv').config();

const express = require("express");

const app = express();
const port = process.env.PORT;

const jsondata = [
    {
        color: "red",
        value: "#f00"
    },
    {
        color: "green",
        value: "#0f0"
    },
    {
        color: "blue",
        value: "#00f"
    },
    {
        color: "cyan",
        value: "#0ff"
    },
    {
        color: "magenta",
        value: "#f0f"
    },
    {
        color: "yellow",
        value: "#ff0"
    },
    {
        color: "black",
        value: "#000"
    }
]

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

app.get('/jsondata', (req, res) => {
    res.json(jsondata);
})

app.listen(port, () => console.log(`Server running on port ${port}`));
