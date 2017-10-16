let valueFor = (i) => {
 if ( i % 3 === 0 && i % 5 === 0) {
    return ("FizzBuzz"); }

  else if ( i % 3 === 0) {
    return ("Fizz"); }

  else if ( i % 5 === 0) {
    return ("Buzz"); }

  else {
    return (i);
    }
  }

let fizzBuzz = (number) => {
  var array = [];
  for (var i = 1; i <= number; i++) {
    array.push(valueFor(i))
  }
  return array
}

export {fizzBuzz}
