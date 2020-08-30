/**
 * @author Alexi Jamal
 *
 * @description
 * Bucket Sort is a sorting technique that sorts the elements by
 * first dividing the elements into several groups called buckets.
 * The elements inside each bucket are sorted using any of the suitable
 * sorting algorithms or recursively calling the same algorithm.
 *
 * Several buckets are created. Each bucket is filled with a specific
 * range of elements. The elements inside the bucket are sorted using
 * any other algorithm. Finally, the elements of the bucket are gathered
 * to get the sorted array.
 *
 * The process of bucket sort can be understood as a scatter-gather approach.
 * The elements are first scattered into buckets then the elements of buckets
 * are sorted. Finally, the elements are gathered in order.
 */

console.time("Bucket");
let arr = Array.from({ length: 100000 }, () =>
  Math.floor(Math.random() * 1000000)
);
let buckets = [];

console.log("Array before sorting:\n", arr);
for (let i = 0; i < arr.length; i++) {
  buckets.push([]);
}

arr.forEach((number) => {
  let index = Math.floor(number / 10);
  buckets[index].push(number);
});

buckets.forEach((array) => {
  array.sort();
});

arr = [].concat.apply([], buckets);
console.log("Array after sorting:\n", arr);
console.timeEnd("Bucket");
