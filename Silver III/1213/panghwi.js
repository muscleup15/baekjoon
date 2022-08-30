let fs = require('fs');
let input = fs
  .readFileSync(
    '/Users/panghwi/Library/Mobile Documents/com~apple~TextEdit/Documents/예제.txt'
  )
  .toString()
  .trim()
  .split('\n');
let arr = [...input[0]].sort();
console.log(arr);
//set으로 키를 만들어놓고 거기에 카운트를 하나씩 해준다?
//arr.length가 짝수고 원소의 개수 짝수인 경우
//arr.length가 홀수고 그 중 하나만 원소의 개수가 홀수