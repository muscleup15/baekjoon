let fs = require('fs');
let input = fs
  .readFileSync(
    '/Users/panghwi/Library/Mobile Documents/com~apple~TextEdit/Documents/예제.txt'
  )
  .toString()
  .trim()
  .split('\n')
  .map(Number);

let count0 = [1, 0, 1];
let count1 = [0, 1, 1];

for (let i = 3; i <= 40; i++) {
  count([i]);
}

function count(num) {
  const answer0 = count0[num - 1] + count0[num - 2];
  count0.push(answer0);
  const answer1 = count1[num - 1] + count1[num - 2];
  count1.push(answer1);
}

input.slice(1).forEach((e) => {
  console.log(count0[e], count1[e]);
});
