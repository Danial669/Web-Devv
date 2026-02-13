// Task 1
function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered );

alert( arr );

// Task 2
function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }

}

let arr_2 = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4);

alert( arr );

// Task 3
let arr_3 = [5, 2, 1, -10, 8];

arr_3.sort((a, b) => b - a);

alert( arr_3 );