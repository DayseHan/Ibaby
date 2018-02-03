var db = require('../db/db')

module.exports = {
    register: function(app){
        app.get('/findSpace', function(req, res){
            var sql = `
            select
                SQL_CALC_FOUND_ROWS
                *
            from
                find
             `  
            db.select(sql, function(data){
                res.send(data);
            })
        });
        app.get('/unboxing', function(req, res){
            var sql = `
            select
                SQL_CALC_FOUND_ROWS
                *
            from
                unboxing
                 `  
            db.select(sql, function(data){
                res.send(data);
            })
        });


        app.get('/shop', function(req, res){
            var sql = `
            select
                SQL_CALC_FOUND_ROWS
                *
            from
                shop
                 `  
            db.select(sql, function(data){
                res.send(data);
            })
        });
        app.get('/special', function(req, res){
            var sql = `
            select
                SQL_CALC_FOUND_ROWS
                *
            from
                special
                 `  
            db.select(sql, function(data){
                res.send(data);
            })
        });
        app.get('/brand', function(req, res){
            var sql = `
            select
                SQL_CALC_FOUND_ROWS
                *
            from
                brand
                 `  
            db.select(sql, function(data){
                res.send(data);
            })
        });
        app.get('/media', function(req, res){
            var sql = `
            select
                SQL_CALC_FOUND_ROWS
                *
            from
                media
                 `  
            db.select(sql, function(data){
                res.send(data);
            })
        });

    }
}
