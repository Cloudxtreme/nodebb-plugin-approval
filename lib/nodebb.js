var NodeBB = {};

(function(parent) {
    NodeBB = {
        db: parent.require('./database'),
        settings: parent.require('./settings'),
        meta: parent.require('./meta'),
        user: parent.require('./user'),
        topics: parent.require('./topics'),
        groups: parent.require('./groups'),
        postTools: parent.require('./postTools'),
        pluginSockets: parent.require('./socket.io/plugins'),
        adminSockets: parent.require('./socket.io/admin').plugins,
        socketIndex: parent.require('./socket.io/index')
    };
}(module.parent.parent));

module.exports = NodeBB;
