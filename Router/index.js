const express = require("express");
const _ = express.Router()
const apiRouter = require("./api")

const api = process.env.BASE_URL

_.use(api,apiRouter)




module.exports = _