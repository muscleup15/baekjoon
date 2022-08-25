const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = +input[0];
const str = input[1];

const arr = Array(100).fill(undefined).map(() => Array(100).fill(false));
let dir = 3;
let pos = [N - 1, N - 1];
arr[pos[1]][pos[0]] = true;

let minX = pos[0], maxX = pos[0], minY = pos[1], maxY = pos[1];

[...str].forEach(x => {
    switch (x) {
        case ('F'):
            pos = walk(dir, pos);
            break;
        case ('L'):
            dir = dir === 1 ? 4 : dir - 1;
            break;
        case ('R'):
            dir = dir === 4 ? 1 : dir + 1;
            break;
    }
    arr[pos[1]][pos[0]] = true;

    minX = Math.min(minX, pos[0]);
    minY = Math.min(minY, pos[1]);
    maxX = Math.max(maxX, pos[0]);
    maxY = Math.max(maxY, pos[1]);
})

for (const y of [...Array(maxY - minY + 1).keys()].map(x => x + minY)) {
    let ret = ""
    for (const x of [...Array(maxX - minX + 1).keys()].map(x => x + minX)) {
        ret += arr[y][x] ? '.' : '#'
    }
    console.log(ret);
}

function walk(dir, pos) {
    switch (dir) {
        case (1):
            return [pos[0], pos[1] - 1];
        case (2):
            return [pos[0] + 1, pos[1]];
        case (3):
            return [pos[0], pos[1] + 1];
        case (4):
            return [pos[0] - 1, pos[1]];
    }
}