
// loads environment variables from a .env file into process.env
require('dotenv').config();
// provides a robust set of features to develop web and mobile applications.
const express = require('express');
// will get you a PATH with all of the executables available to npm scripts
const path = require("path");
//Provide loggins
const morgan = require('morgan');
// secure HTTP headers returned by your Express apps
const helmet = require('helmet');
// responsible for all the asynchronous or synchronous file I/O operations.
const fs = require('fs');
// refers to how an application’s endpoints (URIs) respond to client requests.
const apiRoutes = require("./Routes/apiRoutes");


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
app.use("/producttypefilter/:query", apiRoutes);
app.use("/productpricefilter/less", apiRoutes);
app.use("/productpricefilter/more", apiRoutes);
app.use("/contacts/add", apiRoutes)




//Launch Server
app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}!`)
})

module.exports = app;