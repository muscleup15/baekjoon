let fs = require('fs');
let input = fs
  .readFileSync(
    '/Users/panghwi/Library/Mobile Documents/com~apple~TextEdit/Documents/예제.txt'
  )
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const N = input[0];

// 1: 1 1
//2: 2, 1+1 2
//3: 1+1+1, 1+2, 2+1, 3 4
//4 : 1 + 3+ 3 = 7
//5: 11111+ 1112 + 113 + 122 + 23 = 13
//6: 111111 + 11112+ 1113+ 1122+ 123+ +222+ 33+  = 24 1 5 4 6 6 1 1
//7: 44 1111111+ 111112  + 11113 11122 1222 1123 223  331 =44 1 6 5 10 4 12 3 3
//8:
//9:
//10:

function answer(num) {
  if (num == 1) {
    return 1;
  }
  if (num == 2) {
    return 2;
  }
  if (num == 3) {
    return 4;
  } else {
    return answer(num - 1) + answer(num - 2) + answer(num - 3);
  }
}

for (let i = 1; i < N + 1; i++) {
  console.log(answer(input[i]));
}
