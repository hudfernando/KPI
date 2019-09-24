var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());


consign()
	.include('app/routes')
	.then('config/dbConnection.js')
	.then('config/telegramBot.js')
	.then('app/model')
	.then('app/telegram')
	.then('app/controllers')
	.into(app);

module.exports = app;

// app.set('view engine', 'ejs');
// app.set('views', './views');

// app.use(express.static('./public'));
// app.use(bodyParser.urlencoded({extended: true}));

// app.get('/', (req,res) =>{
//     res.render('index');
// });

// app.get('/producao', (req,res) =>{
//     res.render('producao');
// });

// app.get('/estoque', (req,res) => {
//     res.render('');
// });

// app.get('/rec-mercadoria', (req,res) => {
//     res.render('');
// });


// app.post('/producao', (req, res) => {
//     var env = '';
//     var tt;
//     var cont = 0;
//     var str = req.body;
//     for (var property in str) {
//         cont ++;
//         if(cont === 4){
//             env += sinalDeOtimo;
//             continue;
//         }
//         tt = property +' => '+ str[property] +'\n';
//         env += tt;
        
//     }
//     bot.sendMessage(chat_id, env);
 
// })


