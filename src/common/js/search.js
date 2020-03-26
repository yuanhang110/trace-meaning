var mysql  = require('mysql');  
 
var connection = mysql.createConnection({     
  host     : '120.27.145.227',       
  user     : 'Text',              
  password : '1',       
  port: '3306',                   
  database: 'Text' 
}); 
 
connection.connect();
 
var  sql = 'SELECT * FROM UserTest where User=? and PassWord=?"';
//查
connection.query(sql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
 
       console.log('--------------------------SELECT----------------------------');
       console.log(result);
       console.log('------------------------------------------------------------\n\n');  
});
 
connection.end();