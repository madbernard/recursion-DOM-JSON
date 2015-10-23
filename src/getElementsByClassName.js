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
  var $kids = $(document.body).children();

  // need to set up base case that returns when there are no more children, if .hasClass(className)
  // https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes


  // recurse bit

  for (var i = 0; i < $kids.length; ++i) {
    // if there's something there, not just emptyarray
    if (typeof $kids[i] !== 'undefined') {
      // bit that does the work
      if ($kids[i].hasClass(className)) {
        arrayOfBranchReturns.push($kids[i]);
      }
      //go deeper
      //how?
    }
    // else end of branch, also termination condition/base case
    else {
      return;
    }
  }

  return arrayOfBranchReturns;//array.concat stuff to make it flat
};
