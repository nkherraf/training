
module.exports.success = function(el, ...arg) {
    return {
        success: true,
        response: el,
        data: arg[0]
    };
};

module.exports.error = function(err) {
    return {
        success: false,
        response: err
    };
};