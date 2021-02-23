'use strict';

exports.ok = function(values, res){
    var data = {
        'status' : 200,
        'values' : values
    };

    res.jason(data);
    res.end();
}