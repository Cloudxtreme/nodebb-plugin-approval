"use strict";

var plugin = {},
    NodeBB = require('./lib/nodebb'),
    Groups = NodeBB.groups;

plugin.init = function(params, callback) {
    callback();
};

plugin.moveToGroup = function(userData) {
    Groups.join('non-approved', userData.uid);
    Groups.leave('registered-users', userData.uid);
};

module.exports = plugin;
