const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

app.use(express.static('frontend'));
app.use(express.static('jsondata'));

app.get("/db", (req, res)=>{
    res.send(fs.readFileSync(path.join(__dirname, "/jsondata/DB/db.json")));
});

app.get("/dbz", (req, res)=>{
    res.send(fs.readFileSync(path.join(__dirname, "/jsondata/DBZ/dbz.json")));
});

app.get("/dbgt", (req, res)=>{
    res.send(fs.readFileSync(path.join(__dirname, "/jsondata/DBGT/dbgt.json")));
});

app.get("/dbs", (req, res)=>{
    res.send(fs.readFileSync(path.join(__dirname, "/jsondata/DBS/dbs.json")));
});

app.listen(port, ()=>{
    console.log(`Servidor corriendo en http://localhost:${port}`);
});