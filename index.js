const express = require("express");
const app = express()
const DBconnet = require("./DBconnet/Dbconneted")
const Router = require("./Router")
DBconnet()

app.use(express.json())
app.use(Router)

app.listen(8000, function(){
    console.log("nodemon runnig")
})