"use strict";
/*
let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);


io.on('connection', function(socket){
  console.log('a user connected');

  socket.on( "update", function( data ) {
 	  	io.emit( "update", data );
  } );

});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
*/
const UserActions = require( "./src/actions/userActions" );

const userActions = new UserActions();

console.log( userActions.createUser( "test", "test" ) );


console.log( userActions.authUser( "test", "test" ) );


