let fizzBuzz = (number) => {
  var array = [];

    for (var i = 1; i <= number; i++) {
      array.push(i);

      if (i % 3 === 0) {
        array.splice(i - 1, 1, "Fizz");
      };

      if (i % 5 === 0) {
        array.splice(i - 1, 1, "Buzz");
      };

      if (i % 15 === 0) {
        array.splice(i -1, 1, "FizzBuzz");
      }
    }
  return array
}
// ------------------------------------------------------------------

let fizzBuzz = (number) => {
  var array = [];

    for (var i = 1; i <= number; i++) {

      if ( i % 3 === 0 && i % 5 === 0) {
        array.push("FizzBuzz"); }

      else if ( i % 3 === 0) {
        array.push("Fizz"); }

      else if ( i % 5 === 0) {
        array.push("Buzz"); }

      else {
        array.push(i);
        }
      }

    return array
    }

// -----------------------------------------------------------------------

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
