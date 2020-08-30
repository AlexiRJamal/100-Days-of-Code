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
