const arr = [1, 5, 3, 4, 2, 8, 9, 7];
const value = 8;

function linear(arr, val) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }

  return -1;
}

console.log(linear(arr, value));

// The time complexity n