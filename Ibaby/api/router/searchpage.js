var db = require('../db/db');

module.exports = {
    register:function(app){
        app.get('/searchproduct',function(request,response){
            var obj = request.query.data;
            // console.log(request.query.data);
            db.select(`SELECT * FROM goodslist where name LIKE "%${obj}%"`,function(res){
                // console.log(res.data.status)
                response.send(res);
            });
        })
    }
}