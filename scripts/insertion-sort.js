'use strict';





// <!=========================================
// Сортировка вставками / Insertion sort
function insertionSort(arr) {
  let size = arr.length;

  for (let i = 1; i < size - 1; i++) {
    let p = i;
    while (p > 0 && arr[p - 1] > arr[p]) {
      [arr[p - 1], arr[p]] = [arr[p], arr[p - 1]]; // ES6
      p--;
    }
  }
  return arr;
}

let testArr = [4, 5, 74, 232, 3, 643, 77, 1, 0, 56, -3, 0, 88, 745, 1, -120, 333, 223, 99999];
console.log(insertionSort(testArr));
// ===========================================>