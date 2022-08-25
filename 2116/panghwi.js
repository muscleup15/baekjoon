let fs = require('fs');
let input = fs
  .readFileSync(
    '/Users/panghwi/Library/Mobile Documents/com~apple~TextEdit/Documents/예제.txt'
  )
  .toString()
  .trim()
  .split('\n');

const N = input[0];
let arr = [];
let temp = 0;
let index1 = 0;
let index2 = 0;
let maxList = [];
for (let i = 1; i < input.length; i++) {
  let dice = input[i].split(' ').map(Number);
  arr.push(dice);
}
// console.log(arr.length);
//0,5 && 1,3 && 2,4 즉 1,6&& 2,4&& 3,5번째
//위아래만 어떻게든 맞추면 돌리는건 순서가 상관없다. 즉 1,3을 빼면 나머지는 내 알바가 아니야 그중에서 최댓값을 찾으면 돼
//딱 두가지 있네
//이 예시에서는 1,5 를 뺐을때 1이 윗면에 오면 1,4 고정 && 5가 윗면에 오면 5,3 고정 그리고 그 나머지 값들 중에서 최댓값을 찾아서 push 해주자
//2,4 3,6 1,5 총 3가지, *2 총 6번 연산만 하면 되네
//인덱스는 0,1,2까지만 하면 되겠다 for문 돌릴때 //하지만 findIndex는 6번째까지 다 있어야돼 why? 다른 주사위에선 index 찾아야되니까
console.log(arr);
// for (let i = 1; i < arr.length; i++) {
index1 = 0;
arr[0][index1]; //윗면이 이거일때
let tempIndex1 = arr[1].findIndex((element) => element == arr[0][index1]);
let tempIndex2 = findIndex(tempIndex1);
let tempIndex3 = arr[2].findIndex((element) => element == arr[1][tempIndex2]);
arr[1][tempIndex1] = 0;
arr[1][tempIndex2] = 0;
let max = Math.max(...arr[1]);
maxList.push(max);
let tempIndex4 = findIndex(tempIndex3);
arr[2][tempIndex3] = 0;
console.log(arr[2]);

arr[0][findIndex(index1)]; //윗면이 이거일때
// }

function findIndex(i) {
  switch (i) {
    case 0:
      return (index2 = 5);
    case 1:
      return (index2 = 3);
    case 2:
      return (index2 = 4);
    case 3:
      return (index2 = 5);
    case 4:
      return (index2 = 2);
    case 5:
      return (index2 = 0);
  }
}

//여기부터 그냥 참고 코드
/*for (let i = 0; i < 6; i++) {
  if (arr[1][i] == arr[0][0]) {
    arr[1].splice(i, 1);
    temp = arr[1][5];
    console.log(arr);
  }
}
*/
// for (let i = 0; i < 6; i++) {
//   if (arr[1][i] == arr[0][5]) {
//     arr[1].splice(i, 1);
//     console.log(arr);
//   }
// }
