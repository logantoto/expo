var express = require('express');
var router = express.Router();
var express = require('express');
var mysql = require( 'mysql' );



oConnection = mysql.createConnection( {
        host     : 'localhost',
        user     : 'root',
        password : '123',
        database : 'contactos',
        port : 3306,
    } );
oConnection.connect();




/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Desarrollado por INNODEVELOP' });
});



router.post('/',function(req,res){
oConnection.query('insert into personas (id,nombre) value(null,?)',[req.body.nombre],
function(){
    res.redirect('/');
}    
    );
});




router.get('/', function(req, res) {
  oConnection.query('SELECT id, nombre FROM personas',
      function selectCb(error, resultado, fila) {
        if (err) {
          throw err;     
        }
   var amigos = ['Javier', 'Ángel', 'Lorenzo', 'Xavier', 'Albert']
        res.render('index', { title:'Lista de Nombres', datos: amigos });
      }
    );
});






























































module.exports = router;






