var db = require('../db/db')

module.exports = {
	register:function(app){
		app.post('/check_phone',function(req,res){
			db.select(`select * from user where phone=${req.body.phone}`,function(result){
				res.send(result);
			})
		}),
		app.post('/getywc',function(req,res){
			var ywc = req.query.ywc;
			var userid = req.query.userid;
			console.log(ywc)
			db.select(`select * from orders where type=${ywc} and userid=${userid} `,function(result){
				
				res.send(result);
			})
		})
	}
}
