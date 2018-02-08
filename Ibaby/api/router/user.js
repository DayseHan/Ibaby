var db = require('../db/db')

module.exports = {
	register:function(app){
		app.post('/check_phone',function(req,res){
			db.select2(`select * from user where phone=${req.body.phone}`,function(result){
				res.send(result);
			})
		}),
		app.post('/reg',function(req,res){
			var arr = [req.body.phone,req.body.pwd]
			db.insert(`INSERT INTO user(phone,password) VALUES(?,?)`,arr,function(result){
                res.send(result);
            })
		}),
		app.post('/login',function(req,res){
			db.select2(`select * from user where phone=${req.body.phone} and password=${req.body.pwd}`,function(result){
				res.send(result);
			})
		})
	}
}
