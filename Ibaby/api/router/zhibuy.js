var db = require('../db/db');

module.exports = {
    register:function(_app){
        _app.get("/zhibuy",function(request,responer){
            var params = request.query.title;
            // console.log(params);
            var sql = `
                    SELECT 
                        id,imgurl,pinglun
                    FROM 
                        goodslist 
                    WHERE 
                        zhibuy = "${params}"
            `;
            db.select(sql, function(results){
                responer.send(results);
            })
        })
    }
}