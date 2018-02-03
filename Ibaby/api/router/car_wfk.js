var db = require('../db/db')

module.exports = {
	register:function(app){
		app.post('/getcar_wfk',function(req,res){
			var wfk = req.query.wfk;
			var userid = req.query.userid;
			console.log(wfk)
			db.select(`select * from orders where type=${wfk} and userid=${userid}`,function(result){
				
				res.send(result);
			})
		}),
		app.post('/getcar_xgai',function(req,res){
			var order_id = req.query.order_id;
			console.log(order_id)

			db.update(`update orders set type ='1' where order_id=${order_id}`,function(result){

			
				console.log(result)
				res.send(result);
			})
		}),
		app.post('/getcar_ywc',function(req,res){
			var ywc = req.query.ywc;
			var userid = req.query.userid;
			console.log(ywc)
			db.select(`select * from orders where type=${ywc} and userid=${userid}`,function(result){
				
				res.send(result);
			})
		})
		
	}
}
