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
  var root = document.body.children;

// need to set up base case that returns when there are no more children, if .hasClass(className)
// https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes

if (!root.hasChildNodes() && root.hasClass(className)) {
  arrayOfBranchReturns.push(root);
  return;
}
else {
  return;
}

  for (var i = 0; i < root.length; ++i) {
    arrayOfBranchReturns.push(getElementsByClassName(root[i]));
      //return after pushing
    }

  return arrayOfBranchReturns;//array.concat stuff to make it flat
};
