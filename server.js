require('dotenv').config();
const express = require('express');
const path = require("path");
var morgan = require('morgan');
const helmet = require('helmet');
const fs = require('fs');
const apiRoutes = require("./apiRoutes");



const app = express();
const PORT = process.env.PORT || 3500;


const accessLogStream = fs.createWriteStream(path.join(__dirname, 'morgan.log'), { flags: 'a' })

//   instantiate middleware  
app.use(morgan('dev', { stream: accessLogStream }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());

// api
app.use("/", apiRoutes);
app.use("/products", apiRoutes);
app.use("/contacts", apiRoutes);

//Launch Server
app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}!`)
})