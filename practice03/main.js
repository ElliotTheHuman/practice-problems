function oneToMultiArray(someArray) {

  /*
    Pseudocode:
      1. iterate through each element
      2. check if there's a key "typeof _____"
        a. if so, then append element to existing array at that key
        b. if not, then create new key
      3. convert object to array
  */

  var multiObject = {};
  var multiArray = [];

  for (var someArrayIndex = 0; someArrayIndex < someArray.length; someArrayIndex++) {
    var currentArrayElement = someArray[someArrayIndex];
    var typeOfArrayElement = typeof currentArrayElement;

    if (multiObject[typeOfArrayElement] !== undefined) {
      multiObject[typeOfArrayElement].push(currentArrayElement);
    } else {
      multiObject[typeOfArrayElement] = [currentArrayElement];
    }
  }

  for (var type in multiObject) {
    multiArray.push(multiObject[type]);
  }

  return multiArray;
}

// Testing
var myArray = ['hello', 34, true, false, 'goodbye', 56, 12, '25', true];
console.log(oneToMultiArray(myArray));
