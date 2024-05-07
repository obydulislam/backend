const express = require("express");
const _ = express.Router()
const authRouter = require("./auth")



_.use("/auth",authRouter)




module.exports = _