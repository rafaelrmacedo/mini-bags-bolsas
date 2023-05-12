import express from "express";

import "./database"; //import the database connection

const app = express(); //create the server 

app.listen(3000, () => console.log("Server is running"));