var db = require('../db/db.js');

module.exports = {
    register: function (app){
        app.get('/alluser',function (req,res){
            var _id = req.query.id;
            var status = req.query.status;
            var page = req.query.page * 1;
            var limit = req.query.limit * 1;
            var sql = `
            select
                SQL_CALC_FOUND_ROWS
                *
            from
                user
            where
                id
            limit ${(page - 1) * limit}, ${limit};
            select FOUND_ROWS() as rowscount;
            ` 
            var sql2 = `
            DELETE
            FROM
                user
            where
                id = "${_id}"
            `
            db.select(sql, function (data){
                res.send(data);
                // console.log(data);
            })
            db.delete(sql2, function(data){
                
            })
        }),
        app.get('/alluserallsearch',function (req,res){
            var sql3 = `
            select
                SQL_CALC_FOUND_ROWS
                *
            from
                user`
            db.select(sql3, function(data){
                res.send(data);
            })
        }),
        app.get('/allusersearch',function (req,res){
            var $id = req.query.id;console.log($id)
            var $name = req.query.name;
            var sql4 = `
            select
                SQL_CALC_FOUND_ROWS
                *
            from
                user
            where
                id = "${$id}" && username = "${$name}" || username = "${$name}"`;
            console.log(sql4)
            db.select(sql4, function(data){
                res.send(data);
            })
        }),
        app.get('/alluserrevise',function (req,res){
            var id = req.query.id;
            var _username = req.query.columns1; 
            var _password = req.query.columns2;
            var _address = req.query.columns3;
            var _add_time = req.query.columns4;
            var sql5 = `
            update user set password="${_password}",address="${_address}",add_time="${_add_time}",username="${_username}",value="${_username}" where id="${id}"`
            console.log(sql5)
            db.update(sql5, function(data){
                res.send(data);
            })    
        })
    }
}