let fs = require('fs');
let input = fs
  .readFileSync(
    '/Users/panghwi/Library/Mobile Documents/com~apple~TextEdit/Documents/예제.txt'
  )
  .toString()
  .trim()
  .split('\n');

let [w,h] = input[0].split(' ').map(Number)
let startIndex = 0;

while(w !== 0 && h!==0){
let startNum = startIndex    
let island = []
let islandNum = 0
for(let i = startNum + 1 ; i <= startIndex + h; i++){
    island.push(input[i].split(' '))
    }

for(let i = 0;i<island.length;i++){
    for(let j = 0;i<island[i].length-1;j++){
        // if(island[i][j]!==island[i][j+1] && island[i][j] === '0')
        // {islandNum++}
    }
}

startIndex += h+1;
[w,h] = input[startIndex].split(' ').map(Number);

}


// const edges = [[0, 1], [1, 2], [3, 4]]
// const maxVertex = edges.reduce((a,c) => {
//     const bigger = Math.max(...c);
//     if (bigger > a) return bigger;
//     return a;
//   }, 0);

//   const adjList = {};
//   // adjList를 만들고 maxVertex만큼 반복시켜준다. 
//   for (let i = 0; i <= maxVertex; i++) {
// 		adjList[i] = [];
//   };
//   // edges를 순회하면서 간선을 연결해준다.(인접 리스트이기 때문에 값을 push함)
//   for (let i = 0; i < edges.length; i++) {
// 		adjList[edges[i][0]].push(edges[i][1]);
// 		adjList[edges[i][1]].push(edges[i][0]);
//   }

//   console.log(adjList);