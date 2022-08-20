const fs = require('fs'); // 밖으로 빼니까 빨라짐,,,?
(() => {
    const input = fs.readFileSync('/dev/stdin').toString();
    const arr = [...input]
        .map(x => x.charCodeAt() - 65)
    const cnt = Array(26).fill(0);
    arr.forEach(x => cnt[x]++);

    const ans = [];
    let middle = null;

    for (let [i, val] of cnt.entries()) {
        if (val === 0) { continue; }
        if (val % 2 !== 0) {
            if (middle !== null) {
                console.log("I'm Sorry Hansoo");
                return;
            } else {
                middle = i;
            }
        }
        ans.push(...new Array(Math.floor(val / 2)).fill(i + 65));
    }
    if (middle !== null) {
        console.log(String.fromCharCode(...ans, middle + 65, ...ans.reverse()));
    } else {
        console.log(String.fromCharCode(...ans, ...ans.reverse()));
    }
})();