// require the server package
const express = require ("express")
//  import database 
const db = require("./models/db")
//require to .env
require("dotenv").config()


// instance the expree in app variable

const app = express()
// declare PORT variabel to save server port I will use port 5000

const PORT =process.env.PORT
// make the server listen to request
app.listen(()=>{
    console.log(`Server listening at http://localhost:${PORT}`);
})
