const express = require('express')
const app = express()
const port = 3000
const { routes } = require('./routes/index')

routes(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})