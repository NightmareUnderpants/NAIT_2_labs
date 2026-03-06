const arr = [2, 2, 4, 1, 6, 12];

const minn = arr.reduce((number, item) => item > number ? number : item, Infinity);

console.log(minn);

const add = (a, b) => a + b;
const mult = (a, b) => a * b;

