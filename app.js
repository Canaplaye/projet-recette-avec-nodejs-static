const express = require('express');
const fs = require('node:fs');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.static('public/images'));

app.get('/index.html', (req, res) => {
    fs.readFile('html/index.html', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data);
        res.writeHead(200, { 'Content-Type': 'text/html'})
        res.end(data);
    });
});

app.get('/recettes', (req, res) => {
    fs.readFile('/html/recettes', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data);

        res.writeHead(200, { 'Content-Type': 'text/html'})
        res.end(data);
    });
});

app.get('/contact', (req, res) => {
    fs.readFile('/html/contact', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data);
    });
});

app.get('/connexion', (req, res) => {
    fs.readFile('/html/connexion', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data);
    });
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});