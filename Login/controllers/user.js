module.exports.register = function(req, res, next){
  message="successfully authenticated"
 res.render('index.ejs',{message: message});
};

module.exports.logout = function(req, res, next){
  message="successfully authenticated"
 res.render('login.ejs');
};

module.exports.feed_tissue_data = function(req, res, next){
  message="successfully authenticated"
 res.render('feed_tissue_data.ejs');
};

module.exports.visualise_data = function(req, res, next){
  message="successfully authenticated"
 res.render('visualise_data.ejs');
};



