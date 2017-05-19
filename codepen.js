String.prototype.fmt = function (/* arg1, arg2, ..., argn */) {
    var idx = 0, // current index for non-numerical replacements
        formats = Array.prototype.slice.call(arguments);

    return this.replace(/%@(\d+)?/g, function(match, argIdx) {
        argIdx = argIdx ? parseInt(argIdx, 10) - 1 : idx++;
        match = formats[argIdx];
        return (match === null ? '(null)' : match === undefined ? '' : match).toString();
    });
};

