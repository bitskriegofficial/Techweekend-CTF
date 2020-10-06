var express= require('express');
var bodyParser= require('body-parser');
var crypto= require('crypto-js');
var path= require('path');
require('dotenv').config();

var app= express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(request,response){
	response.sendFile(path.join(__dirname+'/login.html'));
});

app.post('/auth', function(request,response){
	var data= '{"admin":"no", "user":"'+request.body.uname+'","pass":"'+request.body.psw+'"}';
	var obj= JSON.parse(data)
	var hash= crypto.MD5(obj.pass)
	if(obj.user && obj.pass)
	{
		if (obj.user=="\x4a\x42\x6f\x75\x72\x6e\x65" && hash=="a883241dd51bda403ae5d9eb14e41331")
		{
			if(obj.admin=="yes")
			{
				response.send('<h2>ACCESS GRANTED</h2><br><p>'+process.env.FLAG+'</p>');
			}
			else
			{
				response.send('<h2>ACCESS GRANTED</h2><br><p>Sorry, only admins get the flag<p>');
			}
		}
		else
		{
			response.send('<h2>ACCESS DENIED</h2>');
		}
	}
	else
	{
		response.send('<h1>INVALID REQUEST</h1>');
	}
});

app.listen(3000)