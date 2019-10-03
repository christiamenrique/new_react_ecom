const router = require("express").Router();
const mysql = require("mysql");

//  create database connection 
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.MYPASSWORD,
  database: "ecomDB"
});

connection.connect(function (err) {
  if (err) throw err;
  connection.query("SELECT * FROM products", function (err, data) {
    // console.table(data)  
  })
});

// main page
router.get('/', function (req, res) {
})

// fetch all products
router.get('/products', (req, res) => {
  connection.query("SELECT * FROM products INNER JOIN prices ON products.product_id =prices.product_productID", function (err, data) {
    if (err) {
      res.status(500).json({ message: "error getting all products" });
    }
    res.send(data)
    console.table(data)
  })
})

// fetch specfic product based on item type (typeOfProduct)
router.get('/producttypefilter/:query', (req, res) => {
  let item = req.params.query // :query /productfilter/1 {query: 1}
  connection.query("SELECT * FROM products INNER JOIN prices ON products.product_id =prices.product_productID WHERE typeOfProduct = ?", item, function (err, data) {
    if (err) {
      res.status(500).json({ message: "error filtering product category" });
    }
    res.json(data)
  })
})

//price filter less 400
router.get('/productpricefilter/less', (req, res) => {
  connection.query("SELECT product_name, product_description, img, price FROM products INNER JOIN prices ON products.product_id =prices.product_productID WHERE price <= 400", (err, data) => {
    if (err) {
      res.status(500).json({ message: "error filtering less than $400" });
    }
    res.json(data)
  })
})

//more than 400
router.get('/productpricefilter/more', (req, res) => {
  connection.query("SELECT product_name, product_description, img, price FROM products INNER JOIN prices ON products.product_id =prices.product_productID WHERE price >= 400", (err, data) => {
    if (err) {
      res.status(500).json({ message: "error filtering more than $400" });
    }
    res.json(data)
  })
})

// getting contacts
router.get('/contacts', (req, res) => {
  connection.query("SELECT * FROM contacts", function (err, data) {
    if (err) {
      res.status(500).json({ message: "error getting the contacts" });
    }
    res.send(data)
  })
})

router.get('/prices', (req, res) => {
  connection.query("SELECT * FROM prices", function (err, data) {
    if (err) {
      res.status(500).json({ message: "error fgetting the prices" });
    }
    res.send(data)
    console.table(data)
  })
})

// posting a new contact
router.post('/contacts/add', (req, res) => {
  let text = "Thank you for contacting Us. We will be reaching back to you soon"
  const { fullName, email, phoneNumber, comments } = req.body;
  connection.query(`INSERT INTO contacts (fullName, email, phoneNumber, comments) Values (
    "${fullName}",
    "${email}",
    "${phoneNumber}",
    "${comments}"
  )`, function (err, result) {
    if (err) throw err;
      res.status(500).json({ message: "error filtering less than $400" });
  })
  res.end(text)
})

module.exports = router;