var express=require("express");
var bodyParser=require('body-parser');

var connection = require('./config');
var app = express();
var req = require('request');
var res = require('response');

var authenticateController=require('./controllers/authenticate-controller');
var registerdetailsController=require('./controllers/register-controller');
var registerController=require('./controllers/feed_tissue_data-controller');
var user = require('./controllers/user');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use('/public', express.static(__dirname + "/public"));


app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "/login.html" );
})

/*app.get('/login.html', function (req, res) {
   res.sendFile( __dirname + "/" + "/index.ejs" );
})*/


/* route to handle controllers */
app.post('/controllers/register-controller', registerdetailsController.register);
app.post('/controllers/authenticate-controller', authenticateController.authenticate);
app.post('/controllers/feed_tissue_data-controller', registerController.register);
/*route to handle user registration*/
app.post('/register', user.register);
app.get('/register', user.register);
/*route to handle logout*/
app.post('/logout', user.logout);
app.get('/logout', user.logout);
/*route to handle feed tissue data*/
app.post('/feed_tissue_data',user.feed_tissue_data);
app.get('/feed_tissue_data',user.feed_tissue_data);
/*route to handle visualise tissue data*/
app.post('/visualise_data',user.feed_tissue_data);
app.get('/visualise_data',user.feed_tissue_data);




app.listen(8012);