'use strict'

// TODO Add documentation
function fizzbuzz(n) {

  for (var i=1; i <= n; i++)
  {
    // TODO Simplify this
    if (i % 15 == 0)
      console.log("FizzBuzz");
    else if (i % 3 == 0)
      console.log("Fizz");
    else if (i % 5 == 0)
      console.log("Buzz");
    else
      console.log(i);
  }
}

fizzbuzz(30);
