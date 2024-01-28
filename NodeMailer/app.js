const express = require("express");
const app =express();
let PORT = 5000;

const sendMails = require("./sendMail");

app.get("/",(req,res)=>{
    res.send("Welcome My World");
});

app.get("/email",sendMails);

const start = async() =>{
    try {
        app.listen(PORT , ()=>{
            console.log(`Server is running on port ${PORT}`);
        });
        } catch (error) {}
};

start();