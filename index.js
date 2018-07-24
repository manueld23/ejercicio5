var express = require("express");
var app = express();

app.use(express.static('publico'));

app.get('/',function(req,res){
	//res.send('Hello world');
	res.render("index");
	});
	app.listen(8181,function(){
		console.log('app listening on port 8181');
		});
