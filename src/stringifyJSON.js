// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// of the three basic things, JSON.stringify treats them like so,
// string becomes "string", number becomes 3, boolean is true or false
// everything that comes out of JSON.stringify is a string, "" around it

// starting at Ben's suggestion by getting it to output those when input those

/*  Done things
 * Boolean, Number, and String objects are converted to the corresponding primitive
 values during stringification, in accord with the traditional conversion semantics.
 ===== done?
 * All symbol-keyed properties will be completely ignored, even when using the
 replacer function.
 ===== Doesn't need addressing in this implementation. ES6

// need to address null

 * If undefined, a function, or a symbol is encountered during conversion it is
 either omitted (when it is found in an object) or censored to null (when it is found
 in an array).
 --- Set up if statement within if statement
 ===== do not need to address this special case for this exercise, may do later as extra credit
 */

// what about other typeof results?
// undefined = 'undefined', null = 'object', symbol = 'symbol', function = 'function'
// everything else = 'object'

// JSON.stringify wants:
/* JSON.stringify() converts a value to JSON notation representing it:

 * Properties of non-array objects are not guaranteed to be stringified in any
 particular order. Do not rely on ordering of properties within the same object
 within the stringification.
 --- Use for/in
 * Non-enumerable properties will be ignored
 --- Use for/in
 */
// change tostring prototype to save structural things like {} and null?

// Here's my thought re: recursion doing this
// find length, set that as a var, recurse up to that var

var stringifyJSON = function(obj) {
  if (obj === null && typeof obj === 'object') {
    return 'null';
  }
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return obj.toString();
  }
  if (typeof obj === 'string') {
    return '"' + obj.toString() + '"';
  }
  // Array special case not considered, can deal with things to leave out
  if (typeof obj === 'undefined' || typeof obj === 'function' || typeof obj === 'symbol') {
    return;
  }
  // below are collections, need to recurse through them
  // array case
  if (Array.isArray(obj)) {
    var toBeJoined = [];
    for (var i = 0; i < obj.length; i++) {
      toBeJoined.push(stringifyJSON(obj[i]));
    }
    return '[' + toBeJoined.join() + ']';
  }
  // object case
  var buildStringFromObject = [];
  for (var key in obj) {
    buildStringFromObject.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
  }
  return '{' + buildStringFromObject.join() + '}';
};
