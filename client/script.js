$(function() {

	var sk = $('#simple_sketch').sketch();
	window.sk = sk
	$( '.save' ).click( function() {
		window.save = JSON.stringify( sk.data( "sketch" ).actions );
	} );


	$( '.clear' ).click( function() {
		sk.data("sketch").clear();
	} );

	$( '.load' ).click( function() {
		sk.data( "sketch" ).load( save );
	} );

	sk.data( "sketch" ).subscribe(  function( actions ) {
		var saveData = JSON.stringify( actions );
		socket.emit( "update", saveData );
	} );


	var socket = io('http://localhost:3000');

	socket.on( "update", function( data ) {
		sk.data( "sketch" ).load( data );
	} );






});	