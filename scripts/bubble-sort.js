'use strict';





// <!=========================================
// Сортировка пузырьком / Bubble sort
function bubbleSort(arr) {
  let size = arr.length;
  let isSwap = true;

  while (isSwap) {
    isSwap = false;

    for (let i = 0; i < size - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // ES6
        isSwap = true;
      }
    }
  }
  return arr;
}

let testArr = [4, 5, 74, 232, 3, 643, 77, 1, 0, 56, -3, 0, 88, 745, 1, -120, 333, 223, 99999];
console.log(bubbleSort(testArr));
// ===========================================>