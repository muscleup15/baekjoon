const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const stack = [];

for (const x of input) {
  if (x === "(" || x === "[") {
    stack.push(x);
  } else {
    let endChar = x === ")" ? "(" : "[";
    let val = x === ")" ? 2 : 3;
    let result = addInner(endChar, val);
    stack.push(result);
  }
}

if (stack.some((x) => !Number.isInteger(x))) {
  console.log(0);
} else {
  return console.log(stack.reduce((a, b) => a + b, 0));
}

function addInner(endChar, val) {
  let inner = 0;
  while (true) {
    const top = stack.pop();
    if (top === endChar) {
      return inner === 0 ? val : val * inner;
    }
    if (!Number.isInteger(top) || top === undefined) {
      return NaN;
    }
    inner += top;
  }
}
