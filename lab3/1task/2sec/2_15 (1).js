//Task 1
function checkAge(age) {
  return (age > 18) ? true : confirm('Did parents allow you?');
}

// Task 2
function min(a, b) {
  return a < b ? a : b;
}

// Task 3
function pow(x, n) {
  let result = x;
  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x", '');
let n = prompt("n", '');

if (n < 1) {
  alert(`Power must be a positive integer`);
} else {
  alert( pow(x, n) );
}