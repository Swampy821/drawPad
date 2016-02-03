"use strict";

module.exports = exports = class BaseStore {
    constructor() {
        this._data = {};
    }

    set( key, value ) {
        this._data[ key ] = value;
    }

    get( key ) {
        return this._data[ key ];
    }
};
