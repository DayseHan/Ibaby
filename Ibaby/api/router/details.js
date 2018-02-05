var db = require('../db/db.js');

module.exports = {
    register:function(_app){
        _app.get('/get_details',function(_req,_res){
            // console.log(_req.query.id);
            var _cateId = _req.query.cateId
            db.select2(`SELECT * FROM catenav where cateId = ${_cateId}`,function(res){
                console.log(res);
                _res.send(res);
            })
        });
    }
}