const express = require('express');
const port = 3000;
const app = express();

app.get("/", (req, res) => {
    res.send("Home page");
});

app.get("/about", (req, res) => {
    res.send("About page");
});

app.get("/contact", (req, res) => {
    res.send("contact page");
});

app.get("/blog/:judul", (req, res) => {
    const {judul} = req.params
    console.log(judul);
    res.send(`blog page ${judul}`);
});

app.get("*", (req, res) => {
    res.send("not found page");
});

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`)
});
