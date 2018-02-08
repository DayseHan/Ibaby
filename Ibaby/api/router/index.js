var express = require('express');
var bodyparser = require('body-parser');
var app = express();
var login = require('./login');
var register = require('./register');
var list = require('./list');
var bring_up = require('./bring_up');
var home = require('./home');
var product = require('./product');
var user = require('./user');
var car_wfk = require('./car_wfk');
var details = require('./details');
var searchproduct = require('./searchpage.js');
var zhibuy = require('./zhibuy');

app.use(bodyparser.urlencoded({
	extended: false
}));


module.exports = {

    start:function(_port){
        app.all('*', function (req, res, next) {

            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
            res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
            res.header("X-Powered-By", ' 3.2.1')
            if (req.method == "OPTIONS") {
                res.sendStatus(200);
            } else {
                next();
            }

        });  
        zhibuy.register(app);
		login.register(app);
		register.register(app);
        home.register(app),
        user.register(app),
        car_wfk.register(app),
        bring_up.register(app);
        list.register(app);
        product.register(app);
        details.register(app);
        searchproduct.register(app);
        app.listen(_port,function(){
                console.log("server:连接成功!");
        })
       
    }
}

       
   

