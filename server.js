require('dotenv').config();
const express = require('express');
const mysql =   require("mysql");
const path = require("path");
const cors = require("cors");

const app = express()
const PORT = 3500

//   instantiate middleware    
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


//  create database connection 
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306, 
  user: "root",  
  password: process.env.MYPASSWORD,
  database: "ecomDB"
});

connection.connect(function(err) {
  if (err) throw err;
  connection.query("SELECT * FROM products", function(err, data){
  })  
});

//api catalogue  

// index page
app.get('/', function (req, res) {
  res.send('Hello World')
})

// fetch all products
app.get('/products', (req, res) => {
  connection.query("SELECT * FROM products INNER JOIN prices ON products.product_id =prices.product_productID", function(err, data){    
    res.send(data)
  })
})

// fetch specfic product based on item type (typeOfProduct)
app.get('/producttypefilter/:query', (req,res) => {
  let item = req.params.query // :query /productfilter/1 {query: 1}
  connection.query("SELECT * FROM products INNER JOIN prices ON products.product_id =prices.product_productID WHERE typeOfProduct = ?", item, function(err, data){    
     res.json(data)   
  })  
})

//price filter less 400
app.get('/productpricefilter/less', (req,res) => {
  connection.query("SELECT product_name, product_description, img, price FROM products INNER JOIN prices ON products.product_id =prices.product_productID WHERE price <= 400", (err, data) => {    
     res.json(data)   
  })  
})

//more than 400
app.get('/productpricefilter/more', (req,res) => {
  connection.query("SELECT product_name, product_description, img, price FROM products INNER JOIN prices ON products.product_id =prices.product_productID WHERE price >= 400", (err, data) => {    
     res.json(data)   
  })  
})

// getting contacts
app.get('/contacts', (req, res) => {
  connection.query("SELECT * FROM contacts", function(err, data){    
    res.send(data)
  })
})


// app.post('/contacts/new', (req, res) => {
//   connection.query("INSERT INTO contacts (fullName, email, phoneNumber, comments) Values (?)", function(err, data){ 
//     // "fullname", "email", "phoneNumber", "comments"
//   const { error } = validateContact(req.body);//result.error
//   //400 Bad request
//   if (error) return res.status(400).send(result.error.details[0].message);

//   const contacts = {
//       fullName: req.body.fullname,
//       email: req.body.email,
//       phoneNumber: req.body.phoneNumber,
//       comments: req.body.comments
//   };
//   contacts.push(contact);
//   res.send(contact);
// })
// })

//posting a new contact
app.post('/contacts/new', (req, res) => {
  const {fullName, email, phoneNumber, comments} = req.body;
  connection.query(`INSERT INTO contacts (fullName, email, phoneNumber, comments) Values (
    "${fullName}",
    "${email}",
    "${phoneNumber}",
    "${comments}"
  )`, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
    res.send(result);
  })
})


function validateContact(contacts) {
  const schema = {
  fullName: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  phoneNumber: Joi.string().trim().regex(/^[0-9]{7,10}$/).required(),
  comments: Joi.string().required(),
  }
  return Joi.validate(employee, schema);
}


// // update contacts
// app.put('/api/updatecontact', (req, res) => {
//   let fullName = req.body.fullName;
//   let email = req.body.email;
//   let phoneNumber = req.body.phoneNumber;
//   let comments = req.body.comments;  
//   connection.query(
//     "UPDATE contacts SET stock_quantity = stock_quantity - ? WHERE item_id = ?",
//     [quantity, item],
//     function(err, data) {     
//       res.json(data)
//     }
//   )
// })



          // Future Update
// // fetch specific product and calculate invoice price
// app.get("/invoiceprice/:productid/:quant", (req, res) => {
//   console.log('hello world')
// 	let item = req.params.productid;
// 	let quantity = req.params.quant;
// 	connection.query(
// 		"SELECT ? as item_id, product_name, (price * ?) AS invoice_price FROM products WHERE item_id = ?",
// 		[item, quantity, item],
// 		(err, data) => {
//       console.log(data)
// 			res.json(data);
// 		}
// 	);
// });
// // fetch specific product and calculate invoice price
// app.get('/invoiceprice/:productid/:quant', (req, res) => {

  
// //   this api endpoint retrieves a product based on item id
// app.get('/product/:id'), (req, res) => {
  
// }
// //   and multiplies the quantity ordered (req.params.quant) by
// //   the price for the product. The object is updated with invoice
// //   price and returned 
  
// })
 


//Launch Server
app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}!`)
})