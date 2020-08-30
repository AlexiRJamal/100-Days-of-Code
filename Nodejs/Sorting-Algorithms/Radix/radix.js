/**
 * @author Alexi Jamal
 *
 * @description
 * Radix sort is a non-comparative sorting algorithm.
 * It avoids comparison by creating and distributing elements into
 * buckets according to their radix.
 *
 * Input list (base 10):

[170, 45, 75, 90, 2, 802, 2, 66]
Starting from the rightmost (last) digit, sort the numbers based on that digit:

[{170, 90}, {02, 802, 02}, {45, 75}, {66}]
    -   -     -    -   -     -   -     -
Notice that a 0 is prepended for the two 2s so that 802 maintains
its relative order as in the previous list (i.e. placed before the second 2)
based on the merit of the second digit.
Sorting by the next left digit:

[{02, 802, 02}, {45}, {66}, {170, 75}, {90}]
  -    -   -     -     -      -   -     -
And finally by the leftmost digit:

[{002, 002, 045, 066, 075, 090}, {170}, {802}]
  -    -    -    -    -    -      -      -
 */

//!UNDONE YET

let arr = Array.from({ length: 10 }, () => {
  Math.floor(Math.random() * 100);
});

let max = Math.max(arr);
let exp = 1;

while (exp / exp > 0) {
  countingSort(arr);
}

function countingSort(arr) {
  let sorted = [];
  let indexArr = [];

  for (let i = 0; i < arr.length; i++) {
    indexArr.push(0);
  }

  arr.forEach((num) => {
    indexArr[num] += 1;
  });

  for (let i = 0; i < indexArr.length; i++) {
    if (i != indexArr.length - 1) {
      indexArr[i + 1] = indexArr[i] + indexArr[i + 1];
    }
  }

  // for (let i = 0; i < arr.length; i++) {
  //   sorted.push(null);
  // }

  arr.forEach((num) => {
    sorted[indexArr[num]] = num;
    indexArr[num]--;
  });

  return sorted;
}
