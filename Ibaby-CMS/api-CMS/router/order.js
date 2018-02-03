var db = require('../db/db.js');

module.exports = {
    register: function (app){
        app.get('/allorders',function (req,res){
            var _id = req.query.id;
            var page = req.query.page * 1;
            var limit = req.query.limit * 1;
            var sql1 = `
            DELETE
            FROM
                orders
            where
                order_id = "${_id}"`
            var sql = `
            select
                SQL_CALC_FOUND_ROWS
                *
            from
                orders
            limit ${(page - 1) * limit}, ${limit};
            select FOUND_ROWS() as rowscount;`
            db.delete(sql1, function(data){
                
            })
            db.select(sql, function(data){
                console.log(data)
                res.send(data);
            })
        }),
        app.get('/allorderssearch',function (req,res){
            var $id = req.query.id;
            var $name = req.query.name;
            var sql2 = `
            select
                SQL_CALC_FOUND_ROWS
                *
            from
                orders
            where
                order_id = "${$id}" && username = "${$name}" || username = "${$name}"`;
            console.log(sql2)
            db.select(sql2, function(data){
                res.send(data);
            })
        }),
        app.get('/allordersallsearch',function (req,res){
            var sql3 = `
            select
                SQL_CALC_FOUND_ROWS
                *
            from
                orders`
            db.select(sql3, function(data){
                res.send(data);
            })
            
        }),
        app.get('/allordersrevise',function (req,res){
            var _order_id = req.query.id;
            var _phone = req.query.columns1;
            var _username = req.query.columns2; 
            var _name = req.query.columns3;
            var _title = req.query.columns4;
            var _total = req.query.columns5;
            var _add_time = req.query.columns6;
            var _type = req.query.columns7;
            var _address = req.query.columns8;  
            var sql5 = `
            update orders set total="${_total}",phone="${_phone}",name="${_name}",type="${_type}",add_time="${_add_time}",title="${_title}",username="${_username}",address="${_address}" where order_id="${_order_id}"`
            console.log(sql5)
            db.update(sql5, function(data){
                res.send(data);
            })    
        }),
        app.get('/allordersType0',function (req,res){
            var _id = req.query.id;
            var page = req.query.page * 1;
            var limit = req.query.limit * 1;
            var sql = `
            select
                SQL_CALC_FOUND_ROWS
                *
            from
                orders
            where
                type = "0"
            limit ${(page - 1) * limit}, ${limit};
            select FOUND_ROWS() as rowscount;`
            var sql1 = `
            DELETE
            FROM
                orders
            where
                order_id = "${_id}"`
            db.delete(sql1, function(data){
                
            })
            db.select(sql, function(data){
                res.send(data);
            })
        }),   
        app.get('/allordersType0search',function (req,res){
            var $id = req.query.id;console.log($id)
            var $name = req.query.name;console.log($name)
            var sql2 = `
            select
                SQL_CALC_FOUND_ROWS
                *
            from
                orders
            where
                order_id = "${$id}" && username = "${$name}" && type = "0" || username = "${$name}" && type = "0"`;
            console.log(sql2)
            db.select(sql2, function(data){
                res.send(data);
            })
        }),
        app.get('/allordersType0allsearch',function (req,res){
            var sql3 = `
            select
                SQL_CALC_FOUND_ROWS
                *
            from
                orders
            where
                type = "0"`
            db.select(sql3, function(data){
                res.send(data);
            })
            
        }),
        app.get('/allordersType0revise',function (req,res){
            var _order_id = req.query.id;
            var _phone = req.query.columns1;
            var _username = req.query.columns2; 
            var _name = req.query.columns3;
            var _title = req.query.columns4;
            var _total = req.query.columns5;
            var _add_time = req.query.columns6;
            var _type = req.query.columns7; 
            var _address = req.query.columns8; 
            var sql5 = `
            update orders set total="${_total}",phone="${_phone}",name="${_name}",type="${_type}",add_time="${_add_time}",title="${_title}",username="${_username}",address="${_address}" where order_id="${_order_id}"`
            console.log(sql5)
            db.update(sql5, function(data){
                res.send(data);
            })    
        }),
        app.get('/allorderWaitshipments',function (req,res){
            var _id = req.query.id;
            var page = req.query.page * 1;
            var limit = req.query.limit * 1;
            var sql = `
            select
                SQL_CALC_FOUND_ROWS
                *
            from
                orders
            where
                type = "1"
            limit ${(page - 1) * limit}, ${limit};
            select FOUND_ROWS() as rowscount;`
            var sql1 = `
            DELETE
            FROM
                orders
            where
                order_id = "${_id}"`
            db.delete(sql1, function(data){
                
            })
            db.select(sql, function(data){
                res.send(data);
            })
        }),
        app.get('/allorderWaitshipmentssearch',function (req,res){
            var $id = req.query.id;
            var $name = req.query.name;
            var sql2 = `
            select
                SQL_CALC_FOUND_ROWS
                *
            from
                orders
            where
                order_id = "${$id}" && username = "${$name}" && type = "1" || username = "${$name}" && type = "1"`;
            console.log(sql2)
            db.select(sql2, function(data){
                res.send(data);
            })
        }),
        app.get('/allorderWaitshipmentsallsearch',function (req,res){
            var sql3 = `
            select
                SQL_CALC_FOUND_ROWS
                *
            from
                orders
            where
                type = "1"`
            db.select(sql3, function(data){
                res.send(data);
            })    
        }),
        app.get('/allorderWaitshipmentsrevise',function (req,res){
            var _order_id = req.query.id;
            var _phone = req.query.columns1;
            var _username = req.query.columns2; 
            var _name = req.query.columns3;
            var _title = req.query.columns4;
            var _total = req.query.columns5;
            var _add_time = req.query.columns6;
            var _type = req.query.columns7; 
            var _address = req.query.columns8; 
            var sql5 = `
            update orders set total="${_total}",phone="${_phone}",name="${_name}",type="${_type}",add_time="${_add_time}",title="${_title}",username="${_username}",address="${_address}" where order_id="${_order_id}"`
            console.log(sql5)
            db.update(sql5, function(data){
                res.send(data);
            })    
        })
    }
}
