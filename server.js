require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();

const cors = require("cors");
const mongoose = require("mongoose");

const userRoutes = require ("./routes/users");
const authRoutes = require("./routes/auth");
const connectwithDB = require("./config/mongoDBConn");

const PORT = process.env.PORT || 4500;


//usage of middleware
app.use((req, res, next)=>{
    console.log(req.path, req.method);
    next();
});
app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/login", authRoutes);

//connecting to DB
connectwithDB();

mongoose.connection.once("open", () => {
    console.log("Hurray!!! Connected to DB!!!");
     app.listen(PORT, () => {
      console.log(`---Project Dashboard Listening to ${PORT}---`);
       });
});

mongoose.connection.on("err", (err) => {
    logError(err);
})