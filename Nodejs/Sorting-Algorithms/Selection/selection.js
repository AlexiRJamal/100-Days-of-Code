/**
 * @author Alexi Jamal
 *
 * @description
 * The selection sort algorithm sorts an array by repeatedly finding the
 * minimum element (considering ascending order) from unsorted part and
 * putting it at the beginning. The algorithm maintains two subarrays
 * n a given array.

1) The subarray which is already sorted.
2) Remaining subarray which is unsorted.

In every iteration of selection sort, the minimum element
(considering ascending order) from the unsorted subarray is picked and moved
to the sorted subarray.
 */

console.time("Selection");
let arr = Array.from({ length: 100000 }, () =>
  Math.floor(Math.random() * 1000000)
);

console.log("Array before sorting:\n", arr);

function selectionSort(arr) {
  let index = 0;

  for (let i = 0; i < arr.length; i++) {
    let minimum = arr[i];
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < minimum) {
        minimum = arr[j];
        index = j;
      }
    }
    arr[index] = arr[i];
    arr[i] = minimum;
  }
  return arr;
}

let sorted = selectionSort(arr);

console.log("Array after sorting:\n", sorted);
console.timeEnd("Selection");
