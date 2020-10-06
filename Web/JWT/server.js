const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 42069;
app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const path = require('path');
const jwt = require('jsonwebtoken');
require('dotenv').config();

app.get('/web_chall4/',function(req,res){
	res.sendFile(path.join(__dirname+'/public/index.html'))
});

app.post('/web_chall4/register/', function(req,res){
	console.log(req.body.username);
	console.log('request made');
	if (!req.body.username) {
		return res.status(400).json({ msg: 'bad request' });
	}

	if (req.body.username == 'admin') {
		res.status(401);
		res.send('<h3>You cannot register as admin');
		return;
	} else {
		const token = jwt.sign(
			{
				username: req.body.username,
			},
			process.env.JWT_KEY,
			{
				expiresIn: '1h',
			}
		);
		res.cookie('jwt', token);
		res.status(200);
		res.send('<h2>Goto /web_chall4/getflag/ </h2>');
	}
});



app.get('/web_chall4/getflag/', function(req,res){
	try {
		//slicing the cookie header
		temp = req.headers.cookie;
		temp = temp.slice(4);
		const verify = jwt.verify(temp, process.env.JWT_KEY);
		//console.log(temp);
		const decoded = jwt.decode(temp, process.env.JWT_KEY);
		if (decoded.username == 'admin') {
			console.log('someone found flag');
			res.status(200);
			res.send(process.env.FLAG);
		} else {
			res.status(200);
			res.send('<h4> Cannot give flag to non-admin <h4>');
		}
	} catch (err) {
		console.log(err);
		res.status(400);
		res.send('<h3>Something fishy</h3>');
	}
});





app.listen(PORT, () => console.log(`connected to ${PORT}`));
