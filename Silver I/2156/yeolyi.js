const fs = require("fs");
const arr = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map(Number);

const answer = [
  [arr[0], arr[0]],
  [arr[1], arr[0] + arr[1]],
  [arr[0] + arr[2], Math.max(arr[0], arr[1]) + arr[2]],
];

for (let i = 3; i < arr.length; i++) {
  const first = Math.max(...answer[i - 2], ...answer[i - 3]) + arr[i];
  const second = answer[i - 1][0] + arr[i];
  answer.push([first, second]);
}

let candidate = [...answer[arr.length - 1]];
if (arr.length > 1) {
  candidate.push(...answer[arr.length - 2]);
}
console.log(Math.max(...candidate));
