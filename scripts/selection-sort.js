'use strict';





// <!=========================================
// Сортировка выбором / Selection sort
function selectionSort(arr) {
  let size = arr.length;

  for (let i = 0; i < size - 1; i++) {
    let min = arr[i];
    let index = i;

    for (let q = i + 1; q < size - 1; q++) {
      if (arr[q] < min) {
        min = arr[q];
        index = q;
      }
    }
    [arr[i], arr[index]] = [arr[index], arr[i]]; // ES6
  }
  return arr;
}

let testArr = [4, 5, 74, 232, 3, 643, 77, 1, 0, 56, -3, 0, 88, 745, 1, -120, 333, 223, 99999];
console.log(selectionSort(testArr));
// ===========================================>