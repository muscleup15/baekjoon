let fs = require('fs');
let input = fs
  .readFileSync(
    '/Users/panghwi/Library/Mobile Documents/com~apple~TextEdit/Documents/예제.txt'
  )
  .toString()
  .split('\n');

for (let i = 1; i < input.length; i++) {
  if (input[i].length === 0) {
    console.log(1);
  } else {
    const arr = [...input[i]];
    let left = 1;
    let right = 1;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] == arr[i + 1]) {
        left += 1;
      } else {
        break;
      }
    }
    for (let i = arr.length - 1; i > 0; i--) {
      if (arr[i] == arr[i - 1]) {
        right += 1;
      } else {
        break;
      }
    }
    const answer = parseInt(Math.pow(2, Math.max(left, right)));
    console.log(answer);
  }
}
