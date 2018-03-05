
// "filter" takes an array and a function "f" as input.
// it returns a new array containing all elements of the input array for which f(element) == true
// input array for which the given function returns true.
export function filter(inputArray, filterFunc) {
  var inputArrayLength = inputArray.length
  var returnArray = []
  var currentIndex = 0
  while (currentIndex < inputArrayLength) {
    var currentElement = inputArray[currentIndex]
    var keep = filterFunc(currentElement)
    if(keep) {
      returnArray.push(currentElement)
    }
    currentIndex++
  }
  return returnArray
}
