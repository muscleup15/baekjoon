let fs = require('fs');
let input = fs
  .readFileSync(
    '/Users/panghwi/Library/Mobile Documents/com~apple~TextEdit/Documents/예제.txt'
  )
  .toString()
  .trim();
input = Number(input);

let arr = new Array(input).fill().map((v, i) => i + 1);
let front = 0;
let rear = arr.length;
console.log(arr);
//
