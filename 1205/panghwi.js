let fs = require('fs');
let input = fs
  .readFileSync(
    '/Users/panghwi/Library/Mobile Documents/com~apple~TextEdit/Documents/예제.txt'
  )
  .toString()
  .split('\n');
// let input = fs.readFileSync('dev/stdin').toString().split('\n');

const existNumber = Number(input[0].split(' ')[0]);
const myNumber = Number(input[0].split(' ')[1]);
const maxNumber = Number(input[0].split(' ')[2]);
console.log(input);
