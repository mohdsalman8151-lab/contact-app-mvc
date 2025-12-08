
import express from "express"
import mongoose from "mongoose"
import Contact from "./models/contacts.models.js"
import ContactRoutes from "./routes/contact.routes.js"
import {contactDB} from "./config/database.js"
const app       = express();
const PORT = process.env.PORT
//database connection
contactDB()

//middleware
app.set('view engine','ejs')
app.use(express.urlencoded({extended:false})) 
app.use(express.static('public'))

//Routes
app.use('/',ContactRoutes)

app.listen(PORT,()=>{
    console.log(`Server start Successfully on port ${PORT}`);
})
