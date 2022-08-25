let fs = require('fs');
let input = fs
  .readFileSync(
    '/Users/panghwi/Library/Mobile Documents/com~apple~TextEdit/Documents/예제.txt'
  )
  .toString()
  .trim()
  .split('\n')
  .map(Number);

for (let i = 1; i < input.length; i++) {
  solution(input[i]);
}

function solution(inputNum) {
  let fiveSquared = 1;
  let countSquared = 0;
  while (inputNum >= fiveSquared) {
    fiveSquared *= 5;
    countSquared += 1;
  }
  countSquared -= 1;
  let answer = 0;
  if (inputNum >= 5) {
    for (let i = 1; i <= countSquared; i++) {
      answer += parseInt(inputNum / Math.pow(5, i));
    }
    console.log(answer);
  } else {
    console.log(0);
  }
}
