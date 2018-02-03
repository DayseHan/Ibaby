var db = require('../db/db.js');

module.exports = {
    register: function (app){
        app.get('/login',function (req,res){
            var _username = req.query.username;
            // console.log(_username);
            var _password = req.query.password;
            // console.log(_password);
            var sql = `
                select
                    *
                from
                    administrator
                where
                    username ="${_username}";
            `
            db.select(sql, function (data){
                var data = data.data.results[0];
                // console.log(data);
                if(data && data.username ==_username && data.password == _password){
                    res.send('success');
                }else{
                    res.send('error')
                }
            })
        })
    }
}