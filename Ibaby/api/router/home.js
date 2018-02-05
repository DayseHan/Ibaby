var db = require('../db/db');

module.exports = {
    register:function(app){
        app.get('/banner',function(request,response){
            db.select('SELECT * FROM `banner`',function(res){
                response.send(res);
            });
        })
        app.get('/tabs',function(request,response){
            db.select('SELECT * FROM `aa`',function(res){
                response.send(res);
            });
        })
        app.get('/isser',function(request,response){
            var _sql = 'select * from `newissue` as a INNER JOIN `goodslist` as b on a.`goodsId` = b.goodsId';
            db.select(_sql,function(res){
                response.send(res);
            })
        })
        app.get('/fileimg',function(request,response){
            db.select('SELECT * FROM `fileBan`', function (res) {
                responer.send(res);
            });
        })
        app.get('/goods',function(request,response){
            var _sql = 'select cateId,cateType,workImg,goodsId,goodsCate,goodsName,goodsPrice,imgurl1 from `catelist` as a INNER JOIN `goodslist` as b on a.cateId = b.indexId ';
            db.select(_sql,function(res){
                response.send(res);
            })
        })
    }
}