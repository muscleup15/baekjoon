let fs = require('fs');
let input = fs
  .readFileSync(
    '/Users/panghwi/Library/Mobile Documents/com~apple~TextEdit/Documents/예제.txt'
  )
  .toString()
  .trim()
  .split('\n');
// let input = fs.readFileSync('dev/stdin').toString().split('\n');
let total = input.map(Number);
let totalHeight = total.reduce((acc, element) => {
  return (acc += element);
}, 0);
outerFor: for (let i = 0; i < total.length; i++) {
  for (let j = total.length - 1; j > i; j--) {
    if (total[i] + total[j] + 100 === totalHeight) {
      total[i] = 0;
      total[j] = 0;
      break outerFor;
    }
  }
}
const result = total.sort((a, b) => a - b).filter((element) => element !== 0);
result.map((element) => console.log(element));
