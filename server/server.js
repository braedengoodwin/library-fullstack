// Dependencies
const express = require("express");
const app = express();
const { Sequelize } = require("sequelize");
const path = require("path");
const cors = require("cors");

// Configuration
require("dotenv").config();
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: false, limit: '10mb' }));

// Controllers
const booksController = require('./controllers/books_controller')
app.use('/api/Books', booksController)

// Listen
app.listen(4005, () =>{
    console.log("Server is running on port http://localhost:4005")
})