'use strict';

module.exports = function(context, callback) {

    var ssh = {
        allow2: context.allow2
    };

    ssh.blocked = function(user, callback) {

    };

    ssh.teardown = function(callback) {
        callback(null);
    };

    return callback(null, ssh);
};
