const express = require("express");
const _ = express.Router()
const Registration = require("../../Controlar/Registration")
const Login = require("../../Controlar/login")
const Otpverify = require("../../Controlar/otpverify")

_.post("/reqistration", Registration )
_.post("/login",Login)
_.post("/otpverify",Otpverify)
    





module.exports = _