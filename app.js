const express = require("express");
const app = express();
var postRouter = require("./postRoute.js");

const PORT = process.env.port || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
const mongoose = require("mongoose");

app.get("/", (req, res) => {
    res.render("index", { title: 'Home' });
});

app.use("/post", postRouter);

app.get("*", (req, res) => {
    res.send("<h1>404 not found</h1>");
});

mongoose
    .connect(
        "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false", { useNewUrlParser: true }
    )
    .then(() => {
        app.listen(PORT, () => {
            console.log(`server is running ${PORT}`);
        });
    })
    .catch((e) => {
        console.log(e);
    });