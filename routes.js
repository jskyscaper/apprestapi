'use strict';

module.exports = function(app){
    var jsonku = require('jsonku');

    app.route('/')
        .get(jsonku.index);

}