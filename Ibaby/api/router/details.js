var db = require('../db/db.js');

module.exports = {
    register:function(_app){
        _app.get('/get_details',function(_req,_res){
            // console.log(_req.query.id);
            var _id = _req.query.id
            db.select2(`SELECT * FROM goodslist where id = ${_id}`,function(res){
                console.log(res);
                _res.send(res);
            })
        });
        _app.post('/add_collect',function(_req,_res){
            var userid = _req.body.userid;
            var goodsid = _req.body.goodsid;
            // var sql =`INSERT INTO cart(uerid,proid) VALUES(${uid},${_req.body.proid})`
            db.update(`update user set collects=concat(collects,'${goodsid},') where user_id = ${userid}`,function(res){
                _res.send(res);
            })
        });
        _app.post('/get_collect',function(_req,_res){
            var userid = _req.body.userid;
            var goodsid = _req.body.goodsid;
            // var sql =`INSERT INTO cart(uerid,proid) VALUES(${uid},${_req.body.proid})`
            db.update(`update user set collects=concat(collects,',${goodsid}') where user_id = ${userid}`,function(res){
                _res.send(res);
            })
        })
    }
}