var Cryptr = require('cryptr');
var express=require("express");
var connection = require('./../config');
// cryptr = new Cryptr('myTotalySecretKey');

module.exports.register=function(req,res){

    var users={
        "age_group":"30-40",
        "gender":"Female",
        "l1":req.body.l1,
        "l2":req.body.l2,
        "l3":req.body.l3,
        "l4":req.body.l4,
        "l5":req.body.l5,
        "l6":req.body.l6,
        "l7":req.body.l7,
        "l8":req.body.l8,
        "l9":req.body.l9,
        "l10":req.body.l10,
        "l11":req.body.l11,
        "l12":req.body.l12,
        "l13":req.body.l13,
        "l14":req.body.l14,
		"l15":req.body.l15,

    }
    connection.query('INSERT INTO tissue_data SET ?',users, function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'there are some error with query'
        })
      }else{
            status:true,
            //data:results,
            //message="user registered sucessfully"
            res.render('feed_tissue_data.ejs',{message: message});
      }
    });
}
