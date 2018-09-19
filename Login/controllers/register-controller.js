var Cryptr = require('cryptr');
var express=require("express");
var connection = require('./../config');
// cryptr = new Cryptr('myTotalySecretKey');

module.exports.register=function(req,res){
  var encryptedString = cryptr.encrypt(req.body.password);
    var users={
        "name":req.body.name,
        "email":req.body.email,
        "user_level":req.body.user_level,
        "university":req.body.university,
        "username":req.body.user_name,
        "password":req.body.password

    }
    connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'there are some error with query'
        })
      }else{
            status:true,
            //data:results,
            //message="user registered sucessfully"
            res.render('index.ejs',{message: message});
      }
    });
}
