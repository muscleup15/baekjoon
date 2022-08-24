const fs = require('fs');
const N = +fs.readFileSync('/dev/stdin').toString();

const arr = new Array(N).fill(0).map((_, i) => i + 1);

let head = 0;
let tail = 0;

const nextIdx = x => (x + 1) % N;

function drop() {
    head = nextIdx(head);
}

function move() {
    const val = arr[head];
    head = nextIdx(head);
    arr[tail] = val;
    tail = nextIdx(tail);
}

while ((head + 1) % N !== tail) {
    drop();
    move();
}

console.log(arr[head]);
