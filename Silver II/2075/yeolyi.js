let arr = [null];

function enqueue(x) {
  let cur = arr.length;
  arr.push(x);
  while (true) {
    const parentIdx = Math.floor(cur / 2);
    const parentVal = arr[parentIdx];
    if (1 <= parentIdx && parentVal < x) {
      arr[cur] = parentVal;
      arr[parentIdx] = x;
      cur = parentIdx;
    } else {
      break;
    }
  }
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let N;
rl.on("line", function (line) {
  if (N === undefined) {
    N = +line;
  } else {
    const input = line.split(" ").map(Number);
    for (const x of input) {
      enqueue(x);
    }
    arr.splice(N + 1);
  }
}).on("close", function () {
  console.log(Math.min(...arr.slice(1)));
  process.exit();
});
