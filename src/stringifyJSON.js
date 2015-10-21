/* In case, for extra credit, I wanted to make this perfectly match
the MDN description of JSON.stringify, these are the parts that need doing:

 JSON.stringify() converts a value to JSON notation representing it:

 * All symbol-keyed properties will be completely ignored, even when using the
 replacer function.

 * If undefined, a function, or a symbol is encountered during conversion it is
 either omitted (when it is found in an object) or censored to null (when it is found
 in an array).

 */

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
    if (stringifyJSON(obj[key])) {
      buildStringFromObject.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }
  }
  return '{' + buildStringFromObject.join() + '}';
};
