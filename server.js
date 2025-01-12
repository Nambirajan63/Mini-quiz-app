const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'Quiz_Application'
});

connection.connect();

app.use(bodyParser.json());
app.use(cors());

app.use(express.json());

app.get('/data', (req, res) => {
	connection.query('SELECT * FROM students', (error, results, fields) => {
		res.json(results);		
	});
});
var a;
app.post('/data', (req, res) => {
	const {name, phone, roll} = req.body;	
	connection.query(`insert into students(Name, Roll_no, Phone_no) values('${name}', '${roll}', ${phone})`, (error, results, fields) => {
		console.log("Successfully Insert User Information");
	});
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});