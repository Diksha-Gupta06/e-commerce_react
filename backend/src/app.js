const express = require("express")
const productRouter = require("./routes/product.router")
const indexRouter = require("./routes/index.router")
const userRouter = require("./routes/user.router")
require("dotenv").config()
const app = express()
const path = require("path")
const morgon = require("morgan")
const cors = require("cors")

app.use(morgon("dev"))


app.use(cors({
    origin:"https://e-commerce-react-frontend-scfa.onrender.com/"
}))

app.use(express.json())
app.use(express.urlencoded({extended : true}))


console.log(process.env.MONGODB_URI);

app.use("/", indexRouter) 
app.use("/users", userRouter)
app.use("/products",productRouter)


module.exports = app