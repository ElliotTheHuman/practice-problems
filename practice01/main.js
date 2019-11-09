function biggerWords(someString, stringArray) {

  var longerWordsArray = [];

  for (var stringArrayIndex = 0; stringArrayIndex < stringArray.length; stringArrayIndex++) {
    stringArray[stringArrayIndex].length > someString.length
    ? longerWordsArray.push(stringArray[stringArrayIndex])
    : null;
  }

  return longerWordsArray;
}

console.log(biggerWords('whales', ['bug', 'insect', 'mammal', 'reptile', 'mammoth', 'turtles']))
