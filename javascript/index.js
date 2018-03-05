
// "filter" takes an array and a function "f" as input.
// it returns a new array containing all elements of the input array for which f(element) == true
// input array for which the given function returns true.
export function filter(inputArray, filterFunc) {
  var inputArrayLength = inputArray.legnth
  var returnArray = []
  var currentIndex = 0
  while (inputArray[currentIndex]) {
    var currentElement = inputArray[currentIndex]
    var newElement = filterFunc(currentElement)
    if(newElement) {
      console.log("true")
      returnArray.push(currentElement)
      currentIndex++
    } else {
      console.log("false")
      currentIndex++
    }
  }
return returnArray
}
