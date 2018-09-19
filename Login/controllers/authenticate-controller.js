var Cryptr = require('cryptr');
cryptr = new Cryptr('myTotalySecretKey');

var connection = require('./../config');
module.exports.authenticate=function(req,res){
  var message='';
    var username=req.body.user_name;
    var password=req.body.password;

    connection.query('SELECT * FROM users WHERE username = ?',[username], function (error, results, fields) {
      if (error) {
          res.json({
            status:false,
            message:'there are some error with query'
            })
      }else{

        if(results.length >0){
          decryptedString = results[0].password;
          actor=results[0].user_level;
          if(actor=="Admin"){
              if(password==decryptedString){
                      status:true,
                      //var message = '';
                      //message="successfully authenticated"
                      res.render('admin_login.ejs',{message: message});

              }else{
                    status:false,
                    //var message = '';
                    message="username and password does not match"
                    res.render('login.ejs',{message: message});
              }
          }else if (actor=="Active user") {
            if(password==decryptedString){
                    status:true,
                    //var message = '';
                    //message="successfully authenticated"
                    res.render('active_user_login.ejs',{message: message});

            }else{
                  status:false,
                  //message = '';
                  message="username and password does not match"
                  res.render('login.ejs',{message: message});
            }

          }else{
            if(password==decryptedString){
                    status:true,
                    //message="successfully authenticated"
                    res.render('academic_user_login.ejs',{message: message});

            }else{
                  status:false,
                  message="username and password does not match"
                  res.render('login.ejs',{message: message});
            }
          }

        }else{
              status:false,
              //var message = '';
            message="Username does not exits"
            res.render('login.ejs',{message: message});
        }
      }
    });
}
