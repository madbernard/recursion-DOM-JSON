// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

// jQuery hasClass method

var getElementsByClassName = function(className) {
  //start at base, get array of children FUNC, recurse into that array,
  //if at end of branch, check for the class name FUNC, if classname push into subarray return subarray?

  var arrayOfBranchReturns = [];

// make document.body a variable that can change?  or just loop on root[i].children?
// http://youmightnotneedjquery.com/
// everything jQuery all the time
var recurseOn = document.body;
var $kids = $(recurseOn).children();

// bit that does the work
// recurseon needs to be brought into jQuery
if (recurseOn.hasClass(className)) {
  arrayOfBranchReturns.push(recurseOn);
}

// need to set up base case that returns when there are no more children, if .hasClass(className)
// https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes
// termination condition/base case

if (!recurseOn.hasChildNodes()) {
  return;
}

// recurse bit

for (var i = 0; i < $kids.length; ++i) {
  // if there's something there, not just emptyarray
  if (typeof recurseOn[i] !== 'undefined') {
    getElementsByClassName();
  }
  // else end of branch
  else {
    return;
  }
}

return arrayOfBranchReturns;//array.concat stuff to make it flat
};
