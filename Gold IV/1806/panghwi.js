let fs = require('fs');
let input = fs
  .readFileSync(
    '/Users/panghwi/Library/Mobile Documents/com~apple~TextEdit/Documents/예제.txt'
  )
  .toString()
  .trim()
  .split('\n');

const [condition, inputSequence] = input;
const totalNum = Number(condition.split(' ')[1]); //15
const sequence = inputSequence.split(' ').map((e) => Number(e)); //배열안의 원소 [  5, 1, 3, 5, 10,  7, 4, 9, 2,  8]

const sum = [0];
for (let i = 0; i < sequence.length; i++) {
  sum.push(sum[i] + sequence[i]);
}

let count = sequence.length;

if (sum[sum.length - 1] < totalNum) {
  console.log(0);
} else {
  for (let i = 0; i < sum.length; i++) {
    for (let j = 0; j < sum.length; j++) {
      if (sum[j] - sum[i] >= totalNum) {
        count = Math.min(j - i, count);
      }
    }
  }
}
console.log(count);
