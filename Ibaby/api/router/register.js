var db = require('../db/db')

module.exports = {
	register:function(app){
		app.get('/regphone',function(req,res){
			var username = req.query.username;
			console.log(username)
			db.select2(`select * from user where username = ${username}`,function(result){
				// console.log(result)
				res.send(result);
			})
		})
		
		app.post('/register',function(req,res){
			var userphone = req.body.username; 
			var password = req.body.password;
			// console.log(userphone, password);
			db.insert('insert into user (username,password,value) values ('+userphone+','+password+','+userphone+')',function(result){
				// console.log(result)
				res.send(result);
			})
		})
	}
}
