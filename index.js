var express = require("express");
var cors = require("cors");
var r = require('rethinkdbdash')({
    servers: [
        { 
            host: 'localhost',
            port: 28015
        }
    ]
});

var app = express();

app.use(cors());

app.get("/getTodo", async (req, res) => {
    r.db("mete").table("todo").then((todo) => {
        res.statusCode = 200;
        res.send({
            message: "Fetch success.",
            code: 200,
            payload: todo
        });
    }).catch((err) => {
        res.statusCode = 500;
        res.send({
            message: err.message,
            code: 500,
            payload: err
        });
    });
});


app.put("/getTodo", async (req, res) => {
    r.db("mete").table("todo").then((todo) => {
        res.statusCode = 200;
        res.send({
            message: "Fetch success.",
            code: 200,
            payload: todo
        });
    }).catch((err) => {
        res.statusCode = 500;
        res.send({
            message: err.message,
            code: 500,
            payload: err
        });
    });
});

app.delete("/getTodo", async (req, res) => {
    r.db("mete").table("todo").then((todo) => {
        res.statusCode = 200;
        res.send({
            message: "Fetch success.",
            code: 200,
            payload: todo
        });
    }).catch((err) => {
        res.statusCode = 500;
        res.send({
            message: err.message,
            code: 500,
            payload: err
        });
    });
});

app.listen(3000);

 