var mysql  = require('mysql');  
 
var connection = mysql.createConnection({     
 host     : '120.27.145.227',       
  user     : 'Text',              
  password : '1',       
  port: '3306',                   
  database: 'Text' 
}); 
 
connection.connect();
 
var delSql = 'DELETE FROM websites where id=6';
//删
connection.query(delSql,function (err, result) {
        if(err){
          console.log('[DELETE ERROR] - ',err.message);
          return;
        }        
 
       console.log('--------------------------DELETE----------------------------');
       console.log('DELETE affectedRows',result.affectedRows);
       console.log('-----------------------------------------------------------------\n\n');  
});
 
connection.end();