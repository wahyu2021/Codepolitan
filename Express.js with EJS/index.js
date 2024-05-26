const express = require("express");
const app = express();
const port = 3000
const path = require('path')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req,res) => {
    res.render('home')
});

app.get('/t/:tag', (req, res) => {
    const {tag} = req.params;
    res.render('tag', {tag})
});

app.get('/cat', (req,res) => {
    const cats = ['embul', 'oren', 'blackk', 'asepp', 'Snowi'];
    res.render('cat', {cats});
});

app.get('/rand', (req, res) => {
    const number = Math.floor(Math.random() * 10) + 1;
    res.render('random', {number});
})

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`)
});