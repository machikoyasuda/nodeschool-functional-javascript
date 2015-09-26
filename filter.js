// getShortMessages:
// takes in an array of objects with '.message' properties
// returns an array of messages that are less than <50 characters long

function getShortMessages(messages) {
  return messages.map(function(message) {
    return message.message;
  }).filter(function(message) {
    return message.length < 50;
  })
}

module.exports = getShortMessages

// Official solution:
// module.exports = function getShortMessages(messages) {
//   return messages.filter(function(item) {
//     return item.message.length < 50
//   }).map(function(item) {
//     return item.message
//   })
// }

// Another solution:
// function isShort(txt) {
//   return txt.length < 50
// }
//
// function getMessage(obj) {
//   return obj.message
// }
//
// function getShortMessages(arr) {
//   return arr.map(getMessage).filter(isShort)
// }
//
// console.log(getShortMessages($input))
