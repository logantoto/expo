

/* GET users listing. */


var express = require('express');
var router = express.Router();
var mysql = require( 'mysql' );

oConnection = mysql.createConnection( {
        host     : 'localhost',
        user     : 'root',
        password : '123',
        database : 'contactos',
        port : 3306,
    } );
 
oConnection.connect();



router.get('/', function(req, res) {
oConnection.query( 'SELECT id, nombre FROM personas', function selectCb( erError, aRows, aFields ) {
    if ( eError ) {
        throw eError;
    }
 
    for ( var i = 0; i < aRows.length; i++ ) {
        res.send( 'The name is: ' + aRows[ i ].id + ' ' + aRows[ i ].nombre );
    }
} );


  //res.send('respond with a resource');
});




module.exports = router;