let fs = require('fs');
let input = fs
  .readFileSync(
    '/Users/panghwi/Library/Mobile Documents/com~apple~TextEdit/Documents/예제.txt'
  )
  .toString()
  .trim()
  .split('\n');
const [N, M] = input[0].split(' ').map(Number);
let number = input[1].split(' ').map(Number);
let arr = [];
number = number.sort((a, b) => a - b);

// function getCombination(array, selectNumber) {
//   let result = [];
//   if (selectNumber === 1) {
//     return array.map((e) => [e]);
//   }
//   array.forEach((fixed, index, array) => {
//     const combinations = getCombination(array, selectNumber - 1);
//     const attached = combinations.map((arr) => [fixed, ...arr]);
//     result.push(...attached);
//   });
//   return result;
// }

// const answer = getCombination(number, M);
// answer.map((e) => console.log(...e));
