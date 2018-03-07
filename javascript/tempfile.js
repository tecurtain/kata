// inputArray = [1, 2, 3]
// filterFunc = x => true
//
// function filter(inputArray, filterFunc) {
//   var inputArrayLength = inputArray.legnth
//   var returnArray = []
//   var currentIndex = 0
//   while (currentIndex < inputArrayLength) {
//     var currentElement = inputArray[currentIndex]
//     var value = filterFunc(inputArray)
//     if(value == true)
//       returnArray.push(currentElement)
//       currentIndex++
//     } else {
//       currentIndex++
//     }
//   }
// return returnArray
// }
//
// // "filter" takes an array and a function "f" as input.
// // it returns a new array containing all elements of the input array for which f(element) == true
// // input array for which the given function returns true.
// export function filter(inputArray, filterFunc) {
//   // check to see the length of the input array and assign that to a variable called inputArrayLength
//   var inputArrayLength = inputArray.legnth
//   //declares a variable named returnArray and sets the value to an empty array
//   var returnArray = []
//   //declares a variable called currentIndex and sets the value to 0 to later track which element in the return array is currently being refered to
//   var currentIndex = 0
//   //while statement will create a loop that will run only when the conditionanl statment in the () are met.  The following code block will excute as many times as the conditional statment is true.  While the currentIndex is less than the inputArrayLength the flowing code block will execute.
//   while (currentIndex < inputArrayLength) {
//     console.log(currentIndex)
//     //declares a variable currentElement that assigns the value of the element in a specific location of the inputArray base on the value of the currentIndex
//     var currentElement = inputArray[currentIndex]
//     // declares an if statment that when calling filterFunc and passing the currentElement evalutes to true it will push the currentElement to the inputArray and increment the currentIndex by 1. If the statment evalues to false it will increment the currentIndex by 1.
//     if (filterFunc(inputArray)) {
//       console.log(inputArray)
//       returnArray.push(currentElement)
//       currentIndex++
//     } else {
//       currentIndex++
//     }
//   }
// //returns the newly created Array
// return returnArray
// }
