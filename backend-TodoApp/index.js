const express = require("express");
const cors=require("cors");
const mysql = require("mysql2");
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

dotenv.config({ path: './.env'});

const app = express();
app.use(cors())

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE
});

// const publicDirectory = path.join(__dirname, './public');
// app.use(express.static(publicDirectory));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: false }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(cookieParser());

// app.set('view engine', 'hbs');

db.connect( (error) => {
  if(error) {
    console.log(error)
  } else {
    console.log("MYSQL Connected...")
  }
})

//Define Routes
//app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth1'));

app.listen(5001, () => {
  console.log("Server started on Port 5001");
})