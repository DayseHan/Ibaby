var db = require('../db/db');

module.exports = {
    register:function(app){
        app.get('/banner',function(request,response){
            db.select('SELECT * FROM `banner`',function(res){
                response.send(res);
            });
        })
        app.get('/tabs', function(req, res){
            var idx = req.query.homecate;
            // console.log(idx)
            var sql = `
            select
                *
            from 
                category a
            INNER JOIN
                catenav b
                where a.homecate = '${idx}' and a.category=b.cateIndex`;
            db.select(sql, function(data){
                res.send(data);
                // console.log(data)
            })
        });
    }
}