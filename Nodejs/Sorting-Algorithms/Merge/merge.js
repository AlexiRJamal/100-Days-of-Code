/**
 * @author Alexi Jamal
 *
 * @description
 * Merge sort is one of the most popular sorting algorithms today
 * It uses the concept of divide and conquer to sort a list of elements.
 * Meaning, it will divide the bigger problem into smaller problems and then
 * solve each of the small problems in order to solve the bigger problem
 * that we started out with.
 */

console.time("Merge");
let arr = Array.from({ length: 1000000 }, () =>
  Math.floor(Math.random() * 1000000)
);

console.log("Array before sorting:\n", arr);

//We have to do this recursively
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  //Some arrays have odd length
  const middle = Math.floor(arr.length / 2);

  //Get the left and right parts of the array
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(leftArr, rightArr) {
  debugger;
  let resultArr = [],
    leftIndex = 0,
    rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      resultArr.push(leftArr[leftIndex]);
      leftIndex++; //Move the cursor of the left array
    } else {
      resultArr.push(rightArr[rightIndex]);
      rightIndex++; //Move the cursor of the right array
    }
  }

  //Some elements remain in both arrays so we need to concat them
  //!USING SLICE
  return resultArr
    .concat(leftArr.slice(leftIndex))
    .concat(rightArr.slice(rightIndex));
}

let temp = mergeSort(arr);
console.log("Array after sorting:\n", temp);
console.timeEnd("Merge");
