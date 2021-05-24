import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import colors from "colors"
import quoteRoutes from "./Routes/quoteRoutes.js"
import cors from "cors"
dotenv.config()





//Mongoose Connection
connectDB()

const app = express()

app.use(cors())

app.get("/", (req, res) => {
    res.send("Server Running...")
})

app.use("/quotes", quoteRoutes)



const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))