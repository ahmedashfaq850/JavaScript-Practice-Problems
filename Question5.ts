// sum of array

const arr = [1, 2, 3, 4, 5, 6, 7];
const summ = arr.reduce((accum, curr) => {
  return accum + curr;
});

console.log(summ);
