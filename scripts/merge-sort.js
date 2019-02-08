'use strict';





// <!=========================================
// Сортировка слиянием / Merge sort
// основная функция
function mergeSort(arr) {
  if (arr.length == 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  // сначала все раздробим потом соберем
  return merge(mergeSort(left), mergeSort(right));
}

// слияние двух отсортированных массивов
function merge(firstArr, secondArr) {
  let sortedArr = [];
  let i = 0;
  let q = 0;

  while (i < firstArr.length && q < secondArr.length) {
    sortedArr.push(
      (firstArr[i] < secondArr[q]) ?
      firstArr[i++] : secondArr[q++]
    );
  }

  // sortedArr + 1 последний элемент
  return [
    ...sortedArr,
    ...firstArr.slice(i),
    ...secondArr.slice(q)
  ] // ES6
}

let testArr = [4, 5, 74, 232, 3, 643, 77, 1, 0, 56, -3, 0, 88, 745, 1, -120, 333, 223, 99999];
console.log(mergeSort(testArr));
// ===========================================>