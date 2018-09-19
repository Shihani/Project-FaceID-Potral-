module.exports.register = function(req, res, next){
  //message="successfully regsitered"
 res.render('index.ejs',{message: message});
};

module.exports.logout = function(req, res, next){
  //message="successfully authenticated"
 res.render('login.ejs');
};

module.exports.feed_tissue_data = function(req, res, next){
  //message="successfully uploaded "
 res.render('feed_tissue_data.ejs');
};

module.exports.visualise_data = function(req, res, next){
  //message="successfully"
 res.render('visualise_data.ejs');
};

module.exports.upload = function(req, res, next){
  //message="successfully uploaded"
 res.render('upload_document.ejs');
};
