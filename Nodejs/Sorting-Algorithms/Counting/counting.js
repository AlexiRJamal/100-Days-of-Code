/**
 * @author Alexi Jamal
 *
 * @description
 * I... Fuck this shit just watch the YouTube video
 * This is magic, not programming, WHAT THE FUCK
 */

console.time("Counting");
let arr = Array.from({ length: 1000000 }, () =>
  Math.floor(Math.random() * 1000000)
);

console.log("Array before sorting:\n", arr);
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

let sorted = countingSort(arr).filter((element) => {
  return element != null;
});

console.log("Array after sorting: \n", sorted);
console.timeEnd("Counting");
