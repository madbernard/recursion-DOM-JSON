// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className, rootNode) {

  var arrayOfBranchReturns = [];

  if (!rootNode) {
    rootNode = document.body;
  }

  // if there's nothing in rootNode, end of branch, termination condition
  if (rootNode === null) {
    return;
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
    var holder = getElementsByClassName(className, $kids.eq(i));
    arrayOfBranchReturns = arrayOfBranchReturns.concat(holder);
  }

  return arrayOfBranchReturns;
};

console.log(getElementsByClassName('foo'));