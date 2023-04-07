const express = require('express');
var bodyParser = require('body-parser')
const app = express();
const mysql = require("mysql");

var cors = require("cors");
app.use(cors());
app.use(express.json());
var urlencodedParser = bodyParser.urlencoded({ extended: false })
    
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
    
app.post('/', urlencodedParser, (req, res) => {

    const data = {
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
      };
      
    console.log('Got body:', req.body);
    connection.query('INSERT INTO formjstable SET ?', data, function (error, results, fields) {
        if (error) throw error;
        res.send('Data inserted into MySQL database with ID: ' + results.insertId);
      });

});
    
app.listen(5000, () => {
    console.log("Express.js app listening on port 5000");
  });
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "formjsdb"
})
 
connection.connect(function(err) {
    if (err) {
      console.error('Error connecting to MySQL database: ' + err.stack);
      return;
    }
    console.log('Connected to MySQL database with connection id ' + connection.threadId);
  });
