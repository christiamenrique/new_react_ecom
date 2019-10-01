const router = require("express").Router();
const mysql =   require("mysql");

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
    // console.table(data)  
  })  
});  

// index page
router.get('/', function (req, res) {
})

// fetch all products
router.get('/products', (req, res) => {
  connection.query("SELECT * FROM products INNER JOIN prices ON products.product_id =prices.product_productID", function(err, data){    
    if (err) {
      console.log(err)
    }
    res.send(data)
    console.table(data)
  })
})

// fetch specfic product based on item type (typeOfProduct)
router.get('/producttypefilter/:query', (req,res) => {
  let item = req.params.query // :query /productfilter/1 {query: 1}
  connection.query("SELECT * FROM products INNER JOIN prices ON products.product_id =prices.product_productID WHERE typeOfProduct = ?", item, function(err, data){    
     res.json(data)   
  })  
})

//price filter less 400
router.get('/productpricefilter/less', (req,res) => {
  connection.query("SELECT product_name, product_description, img, price FROM products INNER JOIN prices ON products.product_id =prices.product_productID WHERE price <= 400", (err, data) => {    
     res.json(data)   
  })  
})

//more than 400
router.get('/productpricefilter/more', (req,res) => {
  connection.query("SELECT product_name, product_description, img, price FROM products INNER JOIN prices ON products.product_id =prices.product_productID WHERE price >= 400", (err, data) => {    
     res.json(data)   
  })  
})

// getting contacts
router.get('/contacts', (req, res) => {
  connection.query("SELECT * FROM contacts", function(err, data){    
    res.send(data)
  })
})

router.get('/prices', (req, res) => {
  connection.query("SELECT * FROM prices", function(err, data){    
    res.send(data)
    console.table(data)
  })
})

// posting a new contact
router.post('/contacts/add', (req, res) => {
  let text = "Thank you for contacting Us. We will be reaching back to you soon"
  const {fullName, email, phoneNumber, comments} = req.body;
  connection.query(`INSERT INTO contacts (fullName, email, phoneNumber, comments) Values (
    "${fullName}",
    "${email}",
    "${phoneNumber}",
    "${comments}"
  )`, function (err, result) {
    if (err) throw err;
    // req.send(result);
  })
  res.end(text)
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


// function validateContact(contacts) {
//   const schema = {
//   fullName: Joi.string().min(3).required(),
//   email: Joi.string().email().required(),
//   phoneNumber: Joi.string().trim().regex(/^[0-9]{7,10}$/).required(),
//   comments: Joi.string().required(),
//   }
//   return Joi.validate(employee, schema);
// }


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

module.exports = router;