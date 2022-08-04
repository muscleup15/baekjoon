let fs = require('fs');
let input = fs
  .readFileSync(
    '/Users/panghwi/Library/Mobile Documents/com~apple~TextEdit/Documents/예제.txt'
  )
  .toString()
  .split('\n');
if (input[0] == input.length - 1) {
  input.shift();
}

input.map((element, index) => {
  if (element.length === 0) {
    console.log(1);
  } else {
    const arr = [...element];
    console.log(arr);
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
});
