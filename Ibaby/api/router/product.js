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
        _app.post('/add_cart',function(_req,_res){
           var arr =[_req.body.userid,_req.body.count,_req.body.color,_req.body.size,_req.body.goodsid]
           // var sql =`INSERT INTO cart(uerid,proid) VALUES(${uid},${_req.body.proid})`
           db.insert(`INSERT INTO cart(userid,count,color,size,goodsid) VALUES(?,?,?,?,?)`,arr,function(res){
                _res.send(res);
           })
        })

        _app.get('/getcartlist',function(_req,_res){
            let uid =_req.query.uid;
            let sql =`
                select
                    c.*,
                    u.phone,
                    g.*
                from
                    cart c
                    inner join user u on c.userid = u.user_id
                    inner join goodslist g on c.proid =g.id
                where 
                    c.userid = ${uid}
                `;
            db.select(sql,function(res){
                console.log(res)
                _res.send(res)
            })
        })

        _app.post('/genorder',function(_req,_res){
            var cartids = _req.body.cartids;
            var goodsids =_req.body.goodsids;

            var uid =_req.body.uid;
             let sql = `INSERT INTO orders(cartid,goodsId,userid) values('${cartids}','${goodsids}',${uid});`      
            console.log(sql)
            db.insert(sql,function(res){
            //    console.log(res)
            // //     // sql='';
            // //     // let orderid = res.data.results.insertId
            // //     // for(let goodsId of goodsids.split(',')){
            // //     //     sql += `insert into orderproduct(productid,orderid) values(${goodsId},${orderid});`
            // //     // }
            // //     // db.insert(sql,function(inserResults){
            // //     //     sql =`delete from cart where cart where indexid in (${cartids})`;
            // //     //     db.delete(sql,function(delResult){
            // //     //         _res.send(delResult)
            // //     //     })
            // //     // })
            })
        })
        _app.get('/getpay',function(_req,_res){
            let uid=_req.query.uid;
            var sql = `
            select
               *
            from 
                orders 
            where 
                orders.userid = ${uid}
            `
            db.select(sql,function(res){
                var len =res.data.results
                for(i=0;i<len.length;i++){
                    console.log(len[i].goodsId.split(','))
                }
                _res.send(res)
            })
        })
    }
}