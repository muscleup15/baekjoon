const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, L] = input[0].split(" ").map(Number);
const arr = input.slice(1).map((x) => x.split(" ").map(Number));

const columnCnt = arr.filter(solve).length;
let rowCnt = 0;
for (let i = 0; i < N; i++) {
  const temp = [];
  for (let j = 0; j < N; j++) {
    temp.push(arr[j][i]);
  }
  if (solve(temp)) {
    rowCnt++;
  }
}
console.log(columnCnt + rowCnt);

function solve(arr) {
  let cur = 1;
  const installed = new Array(arr.length).fill(false);
  while (true) {
    const last = arr[cur - 1];
    if (arr.length <= cur) {
      return true;
    }

    let height = arr[cur];
    if (height === last) {
      cur++;
      continue;
    } else if (height === last - 1) {
      if (arr.length < cur + L) {
        return false;
      }
      if (installed.slice(cur, cur + L).some((x) => x)) {
        return false;
      }
      if (arr.slice(cur, cur + L).every((x) => x === height)) {
        for (let i = cur; i < cur + L; i++) {
          installed[i] = true;
        }
        cur += L;
        continue;
      } else {
        return false;
      }
    } else if (height - 1 === last) {
      if (cur - L < 0) {
        return false;
      }
      if (installed.slice(cur - L, cur).some((x) => x)) {
        return false;
      }
      if (arr.slice(cur - L, cur).every((x) => x === last)) {
        for (let i = cur - L; i < cur; i++) {
          installed[i] = true;
        }
        cur += 1;
        continue;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}
