/**
 * @author Alexi Jamal
 *
 * @description
 */

let arr = Array.from({ length: 10 }, () => {
  Math.floor(Math.random() * 10);
});

let swapped = false;

function swap(a, b) {
  let temp = a;
  a = b;
  b = temp;
  return [a, b];
}
