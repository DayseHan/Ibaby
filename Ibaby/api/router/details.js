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
    }
}