var plugin = {};

plugin.onLoad = function(data, callback) {
    console.log('loaded yay!');
    return callback(true);
};

plugin.onUnload = function(data, callback) {
    console.log('unloaded yay!');
    return callback(true);
};

export default plugin;