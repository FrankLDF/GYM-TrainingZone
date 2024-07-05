import express from "express"
import cors from "cors"
import morgan from "morgan"
import v1clientRoute from "./src/v1/routes/clientsRoutes.js"

const app = express()
const PORT = process.env.PORT || 4000

//config midelwares 
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.use("/v1TZ", v1clientRoute)

app.listen(PORT,()=>console.log(`server on port ${PORT}`))