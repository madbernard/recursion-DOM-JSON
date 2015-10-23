// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(rootNode, className) {
  //start at base, get array of children FUNC, recurse into that array,
  //if at end of branch, check for the class name FUNC, if classname push into subarray return subarray?

  var arrayOfBranchReturns = [];

  if (!rootNode) {
    rootNode = document.body;
  }

  // if there's nothing in rootNode, end of branch, termination condition
  if (rootNode.length === 0) {
    return;
  }

  var $kids = $(rootNode).children();

  for (var i = 0; i < $kids.length; ++i) {
    // bit that does the work
    if ($kids.eq(i).hasClass(className)) {
      arrayOfBranchReturns.push($kids[i]);
    }
    //go deeper
    getElementsByClassName($kids.eq(i), className);
  }

  return arrayOfBranchReturns;//array.concat stuff to make it flat
};
