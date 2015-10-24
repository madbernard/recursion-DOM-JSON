// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className, rootNode) {
  //start at base, get array of children FUNC, recurse into that array,
  //if at end of branch, check for the class name FUNC, if classname push into subarray return subarray?
  var finalArray;

  if (!finalArray) {
    finalArray = [];
  }

  var arrayOfBranchReturns;

  if (!arrayOfBranchReturns) {
    arrayOfBranchReturns = [];
  }

  if (!rootNode) {
    rootNode = document.body;
  }

  // if there's nothing in rootNode, end of branch, termination condition
  if (rootNode === null) {
    return finalArray.push(arrayOfBranchReturns);
  }

    if ($(rootNode).hasClass(className)) {
      arrayOfBranchReturns.push(rootNode);
    }

  var $kids = $(rootNode).children();

  for (var i = 0; i < $kids.length; ++i) {
    // bit that does the work
    if ($kids.eq(i).hasClass(className)) {
      arrayOfBranchReturns.push($kids[i]);
    }
    //go deeper
    getElementsByClassName(className, $kids.eq(i));
  }

  return finalArray;//array.concat stuff to make it flat
};

console.log(getElementsByClassName('foo'));