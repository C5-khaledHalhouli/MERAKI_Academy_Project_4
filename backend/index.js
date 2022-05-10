// require the server package
const express = require("express");
//  import database
const db = require("./models/db");
//require to .env
require("dotenv").config();
// require the routers
const categoryRouter = require("./routes/categoryRouter");
const userRouter = require("./routes/userRouter");
const roleRouter = require("./routes/roleRouter");
// instance the expree in app variable

const app = express();

//middleware
app.use(express.json());

//add path to routers
app.use("/user", userRouter);
app.use("/category", categoryRouter);
app.use("/role", roleRouter);

// declare PORT variabel to get the port from .env

const PORT = process.env.PORT;

// make the server listen to request
app.listen(() => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
