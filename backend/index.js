// require the server package
const express = require("express");
//  import database
const db = require("./models/db");
//require to .env
require("dotenv").config();
const cors = require("cors");
// require the routers
const categoryRouter = require("./routes/categoryRouter");
const userRouter = require("./routes/userRouter");
const roleRouter = require("./routes/roleRouter");
const loginRouter=require("./routes/login")
// instance the expree in app variable

const app = express();
//middleware
app.use(cors());
app.use(express.json());

//add path to routers
app.use("/user", userRouter);
app.use("/category", categoryRouter);
app.use("/role", roleRouter);
app.use("/login",loginRouter)
// Handles any other endpoints [unassigned - endpoints]
app.use("*", (req, res) => res.status(404).json("NO content at this path"))

// declare PORT variabel to get the port from .env

const PORT = process.env.PORT;

// make the server listen to request
app.listen(PORT,() => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
