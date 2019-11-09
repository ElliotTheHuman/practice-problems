function reverse(someArray) {
  var reversedArray = [];

  for (var someArrayIndex = someArray.length-1; someArrayIndex >= 0; someArrayIndex--) {
    reversedArray.push(someArray[someArrayIndex]);
  }

  return reversedArray;
}

console.log(reverse(['hello', 45, 'Bob', 'what', '23']));
