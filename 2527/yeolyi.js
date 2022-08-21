(() => {
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
    input.forEach(x => {
        const [x1, y1, p1, q1, x2, y2, p2, q2] = x.split(' ').map(Number);

        const x3 = Math.max(x1, x2);
        const y3 = Math.max(y1, y2);
        const p3 = Math.min(p1, p2);
        const q3 = Math.min(q1, q2);

        if (x3 > p3 || y3 > q3) {
            console.log('d');
        } else if (x3 === p3 && y3 === q3) {
            console.log('c');
        } else if (x3 === p3 || y3 === q3) {
            console.log('b');
        } else {
            console.log('a');
        }
    })
})();