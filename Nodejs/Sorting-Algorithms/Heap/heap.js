/**
 * @author Alexi Jamal
 *
 * @description
 * Suppose array:
 * 8 4 7 1 3 5
Step 1: 8 is swapped with 5.
Step 2: 8 is disconnected from heap as 8 is in correct position now and.
Step 3: Max-heap is created and 7 is swapped with 3.
Step 4: 7 is disconnected from heap.
Step 5: Max heap is created and 5 is swapped with 1.
Step 6: 5 is disconnected from heap.
Step 7: Max heap is created and 4 is swapped with 3.
Step 8: 4 is disconnected from heap.
Step 9: Max heap is created and 3 is swapped with 1.
Step 10: 3 is disconnected.
 */

let arr = Array.from({ length: 100000 }, () =>
  Math.floor(Math.random() * 1000000)
);

console.time("Heap");
console.log("Array before sorting\n", arr);
let index = 0;
let largest = 0;

for (let i = arr.length - 1; i >= 0; i--) {
  for (let j = i; j >= 0; j--) {
    if (arr[j] > largest) {
      largest = arr[j];
      index = j;
    }
  }
  let temp = arr[i];
  arr[i] = largest;
  arr[index] = temp;
  largest = null;
}

console.log("Array after sorting:\n", arr);
console.timeEnd("Heap");
