// Given an Array of strings, use Array#reudce to create an object that contains the number of times each string occured in the array.

//    var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']
// =>
// {
//   Apple: 2,
//   Banana: 1,
//   Durian: 3
// }

function countWords(inputWords) {
  return inputWords.reduce(function(wordObject, word) {
    wordObject[word] = ++wordObject[word] || 1
    return wordObject
  }, {})
}

module.exports = countWords
