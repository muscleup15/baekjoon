let fs = require('fs');
let input = fs
  .readFileSync(
    '/Users/panghwi/Library/Mobile Documents/com~apple~TextEdit/Documents/예제.txt'
  )
  .toString()
  .trim()
  .split('\n');

const [N, K] = input[0].split(' ').map(Number);
const temperature = input[1].split(' ').map(Number);
let q = 0;
for (let i = 0; i < K; i++) {
  q += temperature[i];
}
for (let i = 0; i < N - K + 1; i++) {
  let temp = 0;
  for (let j = i; j < i + K; j++) {
    temp += temperature[j];
  }
  q = Math.max(q, temp);
}
console.log(q);
