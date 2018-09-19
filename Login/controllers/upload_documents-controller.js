var express=require("express");
var connection = require('./../config');
// cryptr = new Cryptr('myTotalySecretKey');

module.exports.upload=function(req,res){
    var users={
        "name":req.body.file_to_upload
        //"component":req.body.component,

    }
    connection.query('INSERT INTO document SET ?',users, function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'there are some error with query'
        })
      }else{
            status:true,
            //data:results,
            message="user registered sucessfully"
            res.render('index.ejs',{message: message});
      }
    });
}
