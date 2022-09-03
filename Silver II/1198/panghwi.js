let fs = require('fs');
let input = fs
  .readFileSync(
    '/Users/panghwi/Library/Mobile Documents/com~apple~TextEdit/Documents/예제.txt'
  )
  .toString()
  .trim()
  .split('\n');

const [inputNum, ...rest] = input;
const points = rest.map((element) => element.split(' ').map(Number));

let result = getCombinations(points, 3);
let areas = [];

result.forEach((element) => {
  const [x1, x2, x3] = element;
  const area = getArea(x1, x2, x3);
  areas.push(area);
});

const answer = Math.max(...areas);
console.log(answer.toFixed(1));

function getCombinations(arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);
  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });
  return results;
}

function getArea(x1, x2, x3) {
  return Math.abs(
    (x1[0] * x2[1] +
      x2[0] * x3[1] +
      x3[0] * x1[1] -
      (x2[0] * x1[1] + x3[0] * x2[1] + x1[0] * x3[1])) /
      2
  );
}
