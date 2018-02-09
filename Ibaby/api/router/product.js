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
           var arr =[_req.body.userid,_req.body.count,_req.body.color,_req.body.size,_req.body.goodsid,_req.body.username,_req.body.price]
           // var sql =`INSERT INTO cart(uerid,proid) VALUES(${uid},${_req.body.proid})`

           db.insert(`INSERT INTO cart(userid,count,color,size,goodsid,username,price) VALUES(?,?,?,?,?,?,?)`,arr,function(res){
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
                    inner join goodslist g on c.goodsid =g.id
                where 
                    c.userid = ${uid}
                `;
            db.select(sql,function(res){
                _res.send(res)
            })
        })

         _app.post('/statechange',function(_req,_res){
            var uid =_req.body.uid;
            var address =_req.body.address;
            var arr =[_req.body.address]
            console.log(typeof(address))
            db.update(`update orders  SET status = 1 ,address = '${address}' WHERE userid= ${uid}`,function(res){
                  _res.send(res)
            })
         })

        _app.post('/genorder',function(_req,_res){
            var cartids = _req.body.cartids;
            var goodsids =_req.body.goodsids;
            var counts =_req.body.counts;
            var uid =_req.body.uid;
            console.log(counts)
            var arr=[_req.body.uid]
             // let sql = "INSERT INTO `orders`(userid) values("+uid+")"     
            db.insert(`INSERT INTO orders(userid) VALUES(${uid})`,arr,function(result){
                sql='';
                count=''
                for(count of counts.split(',')){
                }
                let orderid = result.data.results.insertId;
                for(let goodsId of goodsids.split(',')){
                    sql+= `insert into orderproduct(goodsid,orderid,count) values(${goodsId},${orderid},${count});`
                }

                
                console.log(count)
              
                console.log(sql)
                db.insert(sql,'',function(inserResults){
                    console.log(inserResults)
                    sql =`delete from cart where  indexid in (${cartids})`;
                    db.delete(sql,function(delResult){
                        _res.send(delResult)
                    })
                })
            })
        })

        _app.get('/getpay',function(_req,_res){
            let uid =_req.query.uid;
            let orderid =_req.query.orderid;
            console.log(orderid)
            let sql =`
                select
                    c.*,
                    u.*,
                    g.*,
                    a.*
                from
                    orders c
                    inner join user u on c.userid = u.user_id
                    inner join orderproduct g on c.orderid =g.orderid
                    inner join goodslist a on g.goodsid=a.id
                where 
                    c.userid = ${uid} and c.orderid=${orderid}
                `;
            db.select(sql,function(res){
                _res.send(res)
            })
        })

        _app.get('/getdate',function(_req,_res){
            let uid=_req.query.uid;
            let sql =`
                select
                    c.*,
                    u.*,
                    g.*
                from
                    orders c
                    inner join orderproduct u on u.orderid = c.orderid
                    inner join goodslist g on u.goodsid =g.id
                where 
                    c.userid = ${uid} && status = 0
                `;
             db.select(sql,function(result){
                console.log(result)
                _res.send(result)
            })
        })
    }
}