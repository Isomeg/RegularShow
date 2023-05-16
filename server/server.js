const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const { encrypt, decrypt, compare } = require('n-krypta');

const app = express();

app.use(express.json());
app.use(cors());

const encryption_key = 'Veni, vidi, vici.';

const con = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "regularshow"
})

app.post('/register', (req, res) => {
    const email = req.body.email;
    const username = req.body.username;
    const password = encrypt(req.body.password, encryption_key);

    con.query("INSERT INTO users (Email, Username, PWD) VALUES (?, ?, ?)", [email, username, password], 
        (err, result) => {
            if(result){
                res.send(result);
            }else{
                res.send({message: "Could not create an Account"})
            }
        }
    )
})

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = encrypt(req.body.password, encryption_key);

    con.query("SELECT * FROM users WHERE (Username = ? OR Email = ?) AND PWD = ?", [username, username, password], 
        (err, result) => {
            if(err){
                req.setEncoding({err: err});
            }else{
                if(result.length > 0){
                    res.send(result);
                }else{
                    res.send({message: "Invalid credentials"})
                }
            }
        }
    )
})

app.listen(3001, () => {
    console.log("Server connection: OK");
})