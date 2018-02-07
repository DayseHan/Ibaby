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
            var idx = request.query.idx;
            console.log(parseInt(idx));
            var sql = 'SELECT id,listsId,name,oldPrice,zhekou,imgurl,buyNum FROM goodslist WHERE listsId=' + uid;

            switch (parseInt(idx)) {
                case 0:
                    sql = sql;
                    break;
                case 1:
                    sql += ' order by cast(oldPrice as decimal)asc'
                    break;
                case 2:
                    sql += ' order by cast(oldPrice as decimal)desc'
                    break;
                case 3:
                    sql += ' order by cast(buyNum as decimal)desc'
                    break;
            }
            db.select(sql,function(results){
                responer.send(results);
            })
        })
    }
}