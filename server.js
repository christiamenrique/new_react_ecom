require('dotenv').config()
const express = require('express')
const mysql =   require("mysql");

const app = express()
const PORT = 3001

//   instantiate middleware    ////

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//  create database connection ////

var connection = mysql.createConnection({
  host: "localhost",
  // db port
  port: 3306, 
  user: "root",  
  password: process.env.MYPASSWORD,
  database: "retailstore_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  connection.query("SELECT * FROM products", function(err, data){
    console.table(data)  
  })  
});

////       api catalogue       ////


// index page
app.get('/', function (req, res) {
  res.send('Hello World')
})

// fetch all products
app.get('/allproducts', (req, res) => {
  connection.query("SELECT * FROM products", function(err, data){    
    res.json(data)
  })
})

// fetch specfic product based on item id
app.get('/product/:productid', (req,res) =>{
  let item = req.params.productid
  connection.query("SELECT item_id, product_name FROM products WHERE item_id = ?", [item], function(err, data){    
     res.json(data)   
  })  
})

// fetch specific product and calculate invoice price
app.get("/invoiceprice/:productid/:quant", (req, res) => {
  console.log('hello world')
	let item = req.params.productid;
	let quantity = req.params.quant;
	connection.query(
		"SELECT ? as item_id, product_name, (price * ?) AS invoice_price FROM products WHERE item_id = ?",
		[item, quantity, item],
		(err, data) => {
      console.log(data)
			res.json(data);
		}
	);
});
// // fetch specific product and calculate invoice price
// app.get('/invoiceprice/:productid/:quant', (req, res) => {

  
// //   this api endpoint retrieves a product based on item id
// app.get('/product/:id'), (req, res) => {
  
// }
// //   and multiplies the quantity ordered (req.params.quant) by
// //   the price for the product. The object is updated with invoice
// //   price and returned 
  
// })

// Purchase the desired quantity of the desired item
app.put('/makepurchase', (req, res) => {
  let item = req.body.item
  let quantity = req.body.quant   
  connection.query(
    "UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?",
    [quantity, item],
    function(err, data) {     
      res.json(data)
    }
  )
})


////////////////////////////////////
/////       Launch Server      ////
//////////////////////////////////
app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}!`)
})