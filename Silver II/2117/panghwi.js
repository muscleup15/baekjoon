let fs = require('fs');
let input = fs
  .readFileSync(
    '/Users/panghwi/Library/Mobile Documents/com~apple~TextEdit/Documents/예제.txt'
  )
  .toString()
  .trim()
  .split('\n');

inputNum = Number(input[0]);

//1 1번 움직이고
//2 2번 움직이고
//3 2번 움직이고
//4 1번 움직이고
let answer = 0;
if (inputNum % 2 == 0) {
  for (let i = 0; i <= inputNum / 2 - 1; i++) {
    answer += i;
  }
  answer = answer * 2;
  console.log(answer);
} else {
  for (let i = 0; i < (inputNum - 1) / 2; i++) {
    answer += i;
  }
  answer = answer * 2;
  answer += (inputNum - 1) / 2;
  console.log(answer);
}
