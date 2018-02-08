var db = require('../db/db')

module.exports = {
    register: function(app){
        app.get('/get_comments', function(req, res){
            var sql = `
            select
                SQL_CALC_FOUND_ROWS
                *
            from
                bring
                 `  
            db.select2(sql, function(data){
                res.send(data);
            })
        });
        app.get('/get_comment', function(req, res){
            var goodsid = req.query.id;
            var sql = `
            select
                SQL_CALC_FOUND_ROWS
                *
            from
                bring
            where goodsid = ${goodsid}
                 `  
            db.select(sql, function(data){
                res.send(data);
            })
        });

    }
}
