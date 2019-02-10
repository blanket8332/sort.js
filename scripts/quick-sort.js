'use strict';





// <!=========================================
// Сортировка выбором / Selection sort
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[0];
  let left = [];
  let right = [];

  for (let i = 1; i < arr.length; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i])
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

let testArr = [4, 5, 74, 232, 3, 643, 77, 1, 0, 56, -3, 0, 88, 745, 1, -120, 333, 223, 99999];
console.log(quickSort(testArr));
// ===========================================>