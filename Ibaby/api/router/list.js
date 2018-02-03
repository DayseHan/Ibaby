var db = require('../db/db')

module.exports = {
    register: function(app){
        app.get('/listSelect', function(req, res){
            var sql = `
            select
                SQL_CALC_FOUND_ROWS
                *
            from
                listtype`  
            db.select(sql, function(data){
                res.send(data);
            })
        });
        app.get('/listPass', function(req, res){
            var idx = req.query.variety;
            console.log(idx)
            var sql = `
            select
                *
            from 
                listtype a,
                goodslist b
                where a.variety = '${idx}' and a.variety=b.cateType`;
            db.select(sql, function(data){
                res.send(data);
            })
        });
        app.get('/headSerch', function(req, res){
            var idx = req.query.variety;
            var sql = `
            select
                variety
            from 
                listtype 
                where '${idx}' = listtype.variety`;
            db.select(sql, function(data){
                res.send(data);
            })
        });
        app.get('/goodsCate', function(req, res){
            var goodsCate =req.query.goodsCate;
            console.log(typeof(goodsCate))
            var sql = `
            select
                *
            from 
                goodslist
                where '${goodsCate}' = goodslist.goodsCate`;
            db.select(sql, function(data){
                res.send(data);
            })
        });
    }
}