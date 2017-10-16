let fizzBuzz = (N) => {
  array = Array(N).fill().map((e,i)=>i+1);
  return array
  }

let fizzBuzz = (N) => {
  array = Array.from({length: N}, (v, k) => k+1);
  return array
  }

Array.from(new Array(N),(val,index)=>index+1);

for (var i = 1; i <= 100; i++) {
  var f = i % 3 == 0, b = i % 5 == 0;
  console.log(f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i);
}

(function (){
    var array = [];

    for (var i = 1; i <= 100; i++) {
        array.push(i);

        if (i % 3 === 0) {
            array.splice(i - 1, 1, 'Fizz');
        }

        if (i % 5 === 0) {
            array.splice(i - 1, 1, 'Buzz');
        }

        if (i % 15 === 0) {
            array.splice(i - 1, 1, 'FizzBuzz');
        }
    }

    console.log(array);
})();
