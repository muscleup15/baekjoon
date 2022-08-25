let fs = require('fs');
let input = fs
  .readFileSync(
    '/Users/panghwi/Library/Mobile Documents/com~apple~TextEdit/Documents/예제.txt'
  )
  .toString()
  .trim()
  .split('\n');

[x1, y1, p1, q1, x2, y2, p2, q2] = input[0].split(' ').map(Number)
let a1 = [x1, y1]
let a2= [p1, y1]
let a3 = [x1, q1]
let a4 = [p1,q1]
let b1 = [x2, y2]
let b2 = [p2, y2]
let b3 = [x2, q2]
let b4 =[p2, q2]

if(x1<x2<p2){
  console.log(x1<x2<p2);
}





/*
i+4 이렇게 표현할 수도 있겠네
a,b c,d

1-i) a<c b>d
1-ii) a<c<b<d
1-iii) x는 크고 y는 작고 // x는 작고 y는 크고
1-iii)a = c b=d


2) 범위
3) y1 = q2 p1 = x2
4) x1>p2 p1<x2 y1>q2 q1<y2
 */