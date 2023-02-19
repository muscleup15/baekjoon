let fs = require('fs');
let input = fs
  .readFileSync(
    '/Users/panghwi/Library/Mobile Documents/com~apple~TextEdit/Documents/예제.txt'
  )
  .toString()
  .trim()
  .split('\n');

const [inputNum, ...serials] = input;

console.log(serials[0].length);

const lengthSerials = serials.sort((a, b) => {
  a.length - b.length;
});
console.log(
  serials.sort((a, b) => {
    a - b;
  })
);

const a = ['1234', '123', '12'];

const b = a.sort((a, b) => {
  a.length - b.length;
});

console.log(b);
