const { Sequelize } = require("sequelize")
require("dotenv").config()


const sequelize=new Sequelize('postgres',process.env.NAME,process.env.PASSWORD,{
    host:"localhost",
    dialect:'postgres'
})

sequelize.authenticate().then(()=>{
    console.log("Connected to Postgress DB")
})
.catch((error)=>console.log(error.message))



module.exports=sequelize

