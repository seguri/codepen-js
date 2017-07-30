/**
 * See
 * https://stackoverflow.com/questions/894860/set-a-default-parameter-value-for-a-javascript-function
 * https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
 */

/**
 * '%@ %@'.fmt('foo', 'bar') returns 'foo bar'
 * '%@2 %@1'.fmt('foo', 'bar') returns 'bar foo'
 */
String.prototype.fmt = function (/* arg1, arg2, ..., argn */) {
    var idx = 0, // current index for non-numerical replacements
        formats = Array.prototype.slice.call(arguments);

    return this.replace(/%@(\d+)?/g, function(match, argIdx) {
        argIdx = argIdx ? parseInt(argIdx, 10) - 1 : idx++;
        match = formats[argIdx];
        return (match === null ? '(null)' : match === undefined ? '' : match).toString();
    });
};

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandom(min = 0, max = 1) {
    return Math.random() * (max - min) + min;
}

/**
 * Returns a random integer between min (inclusive) and max (exclusive).
 * Using Math.round() would give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * Using Math.round() would give you a non-uniform distribution!
 */
function getRandomIntInclusive(min, max) {
    return getRandomInt(min, max+1);
}

