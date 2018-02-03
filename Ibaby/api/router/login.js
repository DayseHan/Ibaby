var db = require('../db/db')

module.exports = {
	register:function(app){
		app.get('/login',function(req,res){
			var username = req.query.username;
			var password = req.query.password;
			// console.log(username)
			db.select(`select * from user where username=${username} and password=${password}`,function(result){
				res.send(result);
			})
		})
	}
}
