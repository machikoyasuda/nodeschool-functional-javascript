// function doubleAll(numbers) {
//   result = numbers.map(function(number){
//     return number * 2
//   })
//   return result
// }
//
// module.exports = doubleAll


module.exports = function doubleAll(numbers) {
  return numbers.map(function double(number) {
    return number * 2
  })
}
