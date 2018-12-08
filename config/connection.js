var mysql = require('mysql');
var db;

var setting = {
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'crudapp'
}

function connectDatabse(){
    if(!db){
        db= mysql.createConnection(settings);

        db.connect(function (err){

            if(!err){
                    console.log("Databse connected");
            }else{
                console.log("error database connection");
            }
        })
    }
    return db;
}
module.exports = connectDatabse();