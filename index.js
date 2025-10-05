const express =require("express");
const app =express();

const port = 8080;

app.listin(port,() =>{
    console.log(`listening on port ${port}`);
});