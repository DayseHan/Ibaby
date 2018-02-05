var db = require('../db/db')

module.exports = {
    register: function(_app){
        _app.get('/menulist',function(request,responer){
            var sql = `
                    select * from category;
                    select 
                        cateIndex,cateId,cateName,cateImg 
                    from 
                        category as a 
                    INNER JOIN 
                        catenav as b 
                    on 
                        a.indexId = b.indexId`
            db.select(sql,function(result){
                responer.send(result);
            })
        })
    }
}