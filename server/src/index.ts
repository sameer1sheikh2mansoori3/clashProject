import express , { Application,  Request , Response} from 'express'
const app :Application =  express()
import 'dotenv/config'
const PORT = process.env.PORT ||  7000 
app.listen(PORT , ()=>{
    console.log(`we are running at ${PORT}`)
})