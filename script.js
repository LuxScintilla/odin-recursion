// ----------------------- Fibonacci Itterative ---------------

function fibonacci(input) {
  const arr = [0, 1];

  if (input <= 1) {
    return arr;
  } else {
    for (i = 2; i <= input; i++) {
      arr.push(arr[i - 1] + arr[i - 2]);
    }
    return arr;
  }
}

// console.log(fibonacci(1));
// console.log(fibonacci(2));
// console.log(fibonacci(5));
// console.log(fibonacci(8));

// ------------------------------------------------------------
// ----------------------- Fibonacci Recursive ----------------

function fibonacciRec(input, i = 2, arr = [0, 1]) {
  if (input <= 1) {
    return arr;
  }

  arr.push(arr[i - 1] + arr[i - 2]);
  return fibonacciRec(input - 1, i + 1, arr);
}

console.log(fibonacciRec(1));
console.log(fibonacciRec(2));
console.log(fibonacciRec(5));
console.log(fibonacciRec(8));

// ------------------------------------------------------------
