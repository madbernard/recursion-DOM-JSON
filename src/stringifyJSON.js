// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// of the three basic things, JSON.stringify treats them like so,
// string becomes "string", number becomes 3, boolean is true or false
// everything that comes out of JSON.stringify is a string, "" around it

// starting at Ben's suggestion by getting it to output those when input those

// what about other typeof results?
// undefined = 'undefined', null = 'object', symbol = 'symbol', function = 'function'
// everything else = 'object'

// JSON.stringify wants:
/* JSON.stringify() converts a value to JSON notation representing it:

 * Properties of non-array objects are not guaranteed to be stringified in any
 particular order. Do not rely on ordering of properties within the same object
 within the stringification.
 --- Use each
 * Boolean, Number, and String objects are converted to the corresponding primitive
 values during stringification, in accord with the traditional conversion semantics.
 ===== done?
 * If undefined, a function, or a symbol is encountered during conversion it is
 either omitted (when it is found in an object) or censored to null (when it is found
 in an array).
 --- Set up if statement within if statement
 * All symbol-keyed properties will be completely ignored, even when using the
 replacer function.
 --- Probably doesn't need addressing in this implementation?
 * Non-enumerable properties will be ignored
 --- Use each
*/

var stringifyJSON = function(obj) {
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return obj.toString();
  }
  if (typeof obj === 'string') {
    return '"' + obj.toString() + '"';
  }
};
