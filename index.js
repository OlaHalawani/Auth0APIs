const express = require("express");

const app = express();

app.get("/public", (req, res)=>{
    res.status(200).send("Hello public");
});

app.get("/private", (req, res)=>{
    res.status(200).send("Hello private");
});

//HANDELLING GET REQUEST
app.get ("*", (req, res)=>{
    res.sendStatus(404);
});

app.listen(8888, ()=>console.log("API started on PORT 8888"))