const fs = require('fs')
const arr = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const total = arr.reduce((a, b) => a + b, 0);
const remaining = total - 100;

loop:
for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
        if (arr[i] + arr[j] == remaining) {
            console.log(arr
                .filter((_, idx) => idx != i && idx != j)
                .sort((a, b) => a - b)
                .join("\n")
            );
            break loop;
        }
    }
}
