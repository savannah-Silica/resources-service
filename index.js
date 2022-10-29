const express = require('express')
const app = express()
const port = 3000
const { routes } = require('./routes/index')
const swaggerUi = require("swagger-ui-express")
const swaggerDocument = require('./swagger.json')


routes(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

var options = {
  explorer: true
};
  
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


  