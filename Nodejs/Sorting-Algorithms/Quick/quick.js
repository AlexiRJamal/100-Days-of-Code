/**
 * @author Alexi Jamal
 *
 * @description
 * It's a divide and conquer algorithm (recursive)
 * 1. Pick a pivot (whatever element, usually the last one in the array)
 * 2. Divide into two halves
 *      a. The left half is < pivot
 *      b. The right half is > pivot
 * 3. Quick sort left
 * 4. ""    ""  right
 * 5. Merge
 */

console.time("Quick");
let arr = Array.from({ length: 1000000 }, () =>
  Math.floor(Math.random() * 1000000)
);
console.log(`Array has ${arr.length} elements.`);
console.log("Array before sorting:\n", arr);
/**
 *
 *
 * @param {*} arr Array to be sorted
 * @constant {*} pivot Last element of the array
 * @var {Array} left Elements smaller than pivot
 * @var {Array} right Elements higher than pivot
 * @returns {Array}
 */
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  //Removes the last element and returns it
  //Since we're going to concat it eventually, doesn't matter if removing it.
  const pivot = arr.pop();

  let left = [],
    right = [],
    sortedArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i]);
    } else right.push(arr[i]);
  }

  return sortedArr.concat(quickSort(left), pivot, quickSort(right));
}

arr = quickSort(arr);

console.log("Array after sorting:\n", arr);
console.timeEnd("Quick");
