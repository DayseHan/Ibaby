var db = require('../db/db')

module.exports = {
	register:function(app){
		app.post('/getuser',function(req,res){
			var num = req.query.num;
			var userid = req.query.userid;
			db.select(`select * from orders where type=${num} and userid=${userid}`,function(result){
				
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
