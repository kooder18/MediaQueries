var express   =  require('express')
   ,exphbs    =  require('express-handlebars')
   ,path      =  require('path')
   ,port      = 3000
   ,app       = express();


var router = express.Router();

app.engine('handlebars', exphbs({defaultLayout: 'base'}));
app.set('view engine', 'handlebars');


app.use(express.static(path.join(__dirname + '/public')));

app.get('/', function(req, res) {

  res.render('home')
})


app.listen(port)

console.log('Server is running')
