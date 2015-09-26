// Array.prototype.some() - returns boolean
//
// Array.prototype.every() - returns boolean
// Tests whether all elements in an array passs the test implemented by the provided function
// array.every(callback[,thisArg])

// Returns a function that takes a list of valid users, and returns a function that returns true if all of the supplied users exist in the original list of users.

module.exports = function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(function(submittedUser) {
      return goodUsers.some(function(goodUser) {
        return goodUser.id === submittedUser.id
      })
    })
  }
}
