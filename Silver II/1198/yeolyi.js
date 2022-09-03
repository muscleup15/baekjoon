const fs = require("fs");
const arr = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .slice(1)
    .map((x) => x.split(" ").map(Number));

let result = 0;

for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
        for (let k = j + 1; k < arr.length; k++) {
            const [x1, y1] = arr[i];
            const [x2, y2] = arr[j];
            const [x3, y3] = arr[k];
            result = Math.max(result, area(x1, y1, x2, y2, x3, y3));
        }
    }
}

console.log(result);

function area(x1, y1, x2, y2, x3, y3) {
    return (
        Math.abs(x1 * y2 + x2 * y3 + x3 * y1 - x2 * y1 - x3 * y2 - x1 * y3) / 2
    );
}
