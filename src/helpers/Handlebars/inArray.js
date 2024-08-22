module.exports = function(array,key,value,options) {
    if (Array.isArray(array)) {
        for (var x = 0; x < array.length; x++) {
            if (array[x][key] === value) {
                return options.fn(this)
            }
        }
        return options.inverse(this);
    }
    console.error("not array passed");
    return options.fn(this)
};
