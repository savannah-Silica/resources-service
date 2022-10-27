const express = require('express')
require("./dbConnection/db")
require("dotenv").config()
const pg=require("pg")

const app = express()

const port = 3000
const { routes } = require('./routes/index')

routes(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})