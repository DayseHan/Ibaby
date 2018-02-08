var db = require('../db/db')

module.exports = {
    register: function(_app){
        _app.get('/menulist', function (request, responer) {
            var sql = `
                    select * from category;
                    select 
                        cateIndex,cateId,cateName,cateImg 
                    from 
                        category as a 
                    INNER JOIN 
                        catenav as b 
                    on 
                        a.indexId = b.indexId;
                    select * from brand`
            db.select(sql, function (result) {
                responer.send(result);
            })
        })
        _app.get('/getlist',function(request,responer){
            var uid = request.query.gId;
            var idx = parseInt(request.query.idx) || 0;

            var sql = `SELECT id,listsId,name,newPrice,oldPrice,zhekou,imgurl,buyNum FROM goodslist WHERE listsId = ${uid}`;
            if(idx == 1){
                sql += ' order by cast(buyNum as decimal)desc';
            }else if(idx == 2){
                sql += ' order by cast(newPrice as decimal)desc';              
            }else if(idx == 3){
                sql += ' order by cast(newPrice as decimal)asc';            
            }else{
                sql = sql;
            }
            console.log(sql);
            db.select(sql,function(results){
                responer.send(results);
                // console.log(results);
            })
            
        })
    }
}