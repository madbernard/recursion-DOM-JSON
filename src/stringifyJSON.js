// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// of the three basic things, JSON.stringify treats them like so,
// string becomes "string", number becomes 3, boolean is true or false
// everything that comes out of JSON.stringify is a string, "" around it

// starting at Ben's suggestion by getting it to output those when input those

var stringifyJSON = function(obj) {
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return obj.toString();
  }
  if (typeof obj === 'string') {
    return '"' + obj.toString() + '"';
  }
};
