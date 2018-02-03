var db = require('../db/db.js');

//comment过滤器，避免重复评论
var filter_comment = function(_req,_res,next){
    db.select2(`SELECT * FROM comment where goodsId=${_req.body.goods_id} and username=${_req.body._user_name}`,function(res){
            if(res.data.results.length>0){
                _res.send('false');
                next('false');
               
            }else{
                next();
            }
    })
};

module.exports = {
    register:function(_app){
        _app.get('/get_product',function(_req,_res){
            // console.log(_req.query.id);
            db.select2(`SELECT * FROM goodslist `,function(res){
                console.log(res);
                _res.send(res);
            })
        });

        _app.get('/get_cart',function(_req,_res){
            db.select2(`SELECT * FROM cart where user_id=${_req.query._user_id}`,function(res){
                _res.send(res);
            })
                
        });

         _app.get('/del_cart',function(_req,_res){
            db.delete(`delete from cart where id in (${_req.query.id_arr})`,function(res){
                _res.send(res);
            })
        });

        _app.post('/opt_orders',function(_req,_res){
            var arr = [_req.body._user_id,_req.body.price_all,_req.body.type,_req.body.title,_req.body.imgurl,_req.body.data,_req.body.username,_req.body.username];
            
            db.insert(`INSERT INTO orders(userid,total,type,title,image,id_arr,username,value) VALUES(?,?,?,?,?,?,?,?)`,arr,function(res){
                _res.send(res);
            })
        });

        _app.post('/add_cart',function(_req,_res){
            console.log(_req.body);
            var arr = [_req.body._user_id,_req.body.color,_req.body.type,_req.body.goods_name,_req.body.price,_req.body.qty,_req.body.price_all,_req.body.imgurl,_req.body.goods_id];
            
            db.insert(`INSERT INTO cart(user_id,color,type,goods_name,price,qty,price_all,imgurl,goods_id) VALUES(?,?,?,?,?,?,?,?,?)`,arr,function(res){
                _res.send(res);
            })

        })

   

        _app.post('/add_comment',filter_comment,function(_req,_res){
            var arr = [_req.body._user_name,_req.body.textarea,_req.body.value,_req.body.goods_id]
            db.insert(`INSERT INTO comment(username,data,star,goodsId) VALUES(?,?,?,?)`,arr,function(res){
                _res.send(res);
            })
        });

        _app.get('/get_comment',function(_req,_res){
            db.select2(`SELECT * FROM comment where goodsId=${_req.query.id}`,function(res){
                _res.send(res);
            })
        });

        _app.post('/add_collect',function(_req,_res){
            var arr = [_req.body.goods_id,_req.body.id];
            // console.log(`UPDATE user SET collect = ${arr[1]} WHERE id = ${arr[0]}`)
            db.update(`UPDATE user SET collect = collect + ${arr[1]} WHERE id = ${arr[0]}`,function(res){
                _res.send(res);
            })
        });

        _app.get('/opt_payment',function(_req,_res){

            // console.log(`UPDATE orders SET type = 1 WHERE order_id = ${_req.body.goods_id}`)
            db.update(`UPDATE orders SET type = 1 WHERE order_id = ${_req.query.order_id}`,function(res){
                _res.send(res);
            })
        });

        _app.get('/payment_list',function(_req,_res){
            db.select2(`SELECT * FROM cart where id in (${_req.query.id_arr})`,function(res){
                _res.send(res);
            });
        });

    }
}