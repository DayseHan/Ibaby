var mysql = require('mysql');

var db = mysql.createPool({
    connectionLimit: 10,
    host: "10.3.136.12",
    user: 'root',
    password: '',
    database: 'ibaby',
    multipleStatements: true
})

module.exports = {
    insert:function(sql,value,callback){
        db.query(sql,value,function(error,results,filters){
            if(error){
                callback({state:false,error:error});
            }else{
                callback({state:true,data:{results,filters}});
                console.log("insert:新增成功!");
            }
        })
    },
    select:function(sql,callback){
        db.query(sql,function(error,results,filters){
            if(error){
                callback({state:false,error:error});
            }else if(results.length>0){
                callback({state:true,data:{results,filters}});
                console.log("select:查询成功!");
            }
        })
    },
    delete:function(sql,callback){
        db.query(sql,function(error,results,filters){
            if(error){
                callback({state:false,error:error});
            }else{
                callback({ state: true, data: { results, filters }, message: "删除受影响的行:" + results.affectedRows})
                console.log("delete:删除成功!");
            }
        })
    },
    update:function(sql,callback){
        db.query(sql,function(error,results,filters){
            if(error){
                console.log(error)
                callback({state:false,error:error});
            }else{
                callback({ state: true, data: { results, filters }, message: "更新受影响的行:" + results.changedRows})
                console.log("update:更改成功!");
            }
        })
    }
}