var db = require('../db/db.js');

module.exports = {
    register: function (app){
        app.get('/allgoods',function (req,res){
            var _id = req.query.id;
            var page = req.query.page * 1;
            var limit = req.query.limit * 1;
            var sql1 = `
            DELETE
            FROM
                goodslist
            where
                goodsId = "${_id}"`
            var sql = `
            select
                SQL_CALC_FOUND_ROWS
                *
            from
                goodslist
            limit ${(page - 1) * limit}, ${limit};
            select FOUND_ROWS() as rowscount;`
            db.delete(sql1, function(data){
                
            })
            db.select(sql, function(data){
                res.send(data);
            })
            
        }),
        app.get('/allgoodssearch',function (req,res){
            var $id = req.query.id;console.log($id)
            var $name = req.query.name;console.log($name)
            var sql2 = `
            select
                SQL_CALC_FOUND_ROWS
                *
            from
                goodslist
            where
                goodsId = "${$id}" && goodsName = "${$name}" || goodsName = "${$name}"`;
            console.log(sql2)
            db.select(sql2, function(data){
                res.send(data);
            })
        }),
        app.get('/allgoodsallsearch',function (req,res){
            var sql3 = `
            select
                SQL_CALC_FOUND_ROWS
                *
            from
                goodslist`
            db.select(sql3, function(data){
                res.send(data);
            })
            
        }),
        app.get('/allgoodscreate',function (req,res){
            var _idindex = req.query.columns1;
            var _name = req.query.columns2;
            var _type = req.query.columns3;
            var _goodcate = req.query.columns4;
            var _price = req.query.columns5;
            var _color = req.query.columns6;
            var _imgurl = req.query.columns7;   
            var sql4 = `
            insert into goodslist (indexId,goodsName,goodsPrice,imgurl1,goodsColor,cateType,goodsCate,value) values("${_idindex}","${_name}","${_price}","${_imgurl}","${_color}","${_type}", "${_goodcate}" ,"${_name}")`
            console.log(sql4)
            db.insert(sql4, function(data){
                res.send(data);
            })
            // var arr = [req.query.indexid,req.query.name,req.query.goodstype,req.query.price,req.query.imgurl,req.query.color,req.query.type];
            // var sql4 = `INSERT INTO goodslist (indexId,goodsName,goodsPrice,imgurl1,goodsColor,cateType,goodsCate,value) VALUES(${arr[0]},${arr[1]},${arr[2]},${arr[3]},${arr[4]},${arr[5]},${arr[6]},${arr[1]})`
            // console.log(sql4)   
            // db.insert(sql4,arr,function(data){
            //     res.send(data);
            // }) 
        }),
        app.get('/allgoodsrevise',function (req,res){
            var _id = req.query.id;
            var _idindex = req.query.columns1;
            var _name = req.query.columns2;
            var _type = req.query.columns3;
            var _goodcate = req.query.columns4;
            var _price = req.query.columns5;
            var _color = req.query.columns6;
            var _imgurl = req.query.columns7;   
            var sql5 = `
            update goodslist set goodsName="${_name}",goodsPrice="${_price}",imgurl1="${_imgurl}",goodsColor="${_color}",cateType="${_type}",goodsCate="${_goodcate}",indexId="${_idindex}" where goodsId="${_id}"`
            console.log(sql5)
            db.update(sql5, function(data){
                res.send(data);
            })    
        })
    }
}
