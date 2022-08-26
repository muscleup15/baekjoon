const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [W, H] = input[0].split(' ').map(x => +x);
const N = +input[1]
const round = 2 * (W + H);
const pos = convert(input[N + 2].split(' ').map(x => +x));
const stores = input.slice(2, N + 2)
    .map(x => x.split(' ').map(x => +x))
    .map(convert);

const result = stores.reduce((a, b) => {
    const diff = Math.abs(pos - b);
    return a + Math.min(diff, round - diff);
}, 0);
console.log(result);

function convert([dir, dist]) {
    switch (dir) {
        case 1:
            return round - dist;
        case 2:
            return H + dist;
        case 3:
            return dist;
        case 4:
            return round - W - dist;
    }
}
