"use strict";

let userStore = require( "./../stores/user" );

class UserActions {
    constructor() {
           
    }
    createUser( username, password ) {
        const id = Date.now();
        userStore.set( id, {
            username: username,
            password: password
        } );
        
        return id;
    }

    authUser( username, password ) {
       let keys = Object.keys( userStore._data );
        
       return  keys.map( ( key ) => {
            let data = userStore.get( key );
            if ( data.username === username &&
                data.password === password ) {
                return Object.assign( data, { id: key } );
            }
       } )[ 0 ]

    }


}

module.exports = exports = UserActions;
