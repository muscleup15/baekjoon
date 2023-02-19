let fs = require('fs');
let input = fs
  .readFileSync(
    '/Users/panghwi/Library/Mobile Documents/com~apple~TextEdit/Documents/예제.txt'
  )
  .toString()
  .trim()
  .split('\n');
let inputString = input[0].toString();
let commandNum = Number(input[1]);

function createNode(value) {
  return {
    value: value,
    prev: null,
    next: null,
  };
}

function createLinkedList(string) {
  if (!string) {
    return null;
  }

  const headNode = createNode(null);
  let currentNode = headNode;

  for (let i = 0; i < string.length; i++) {
    const newNode = createNode(string[i]);
    currentNode.next = newNode;
    newNode.prev = currentNode;
    currentNode = newNode;
  }

  return {
    head: headNode,
    tail: currentNode,
  };
}

function addNode(value) {
  //newnode.next, newnode,prev정의해줘야함
  const newNode = createNode(value);
  if (cur.next !== null) cur.next.prev = newNode;
  newNode.next = cur.next;
  cur.next = newNode;
  newNode.prev = cur;
  cur = newNode;
}

function deleteNode() {
  if (cur.value) {
    cur.prev.next = cur.next; //앞의 연결리스트가 다음 인덱스를
    if (cur.next) {
      cur.next.prev = cur.prev; //cur.next가 null이라면 cur.prev.next는 null을 가리키는 상태
    }
    cur = cur.prev;
  }
}

let list = createLinkedList(inputString);
let cur = list.tail;

for (let i = 2; i < 2 + commandNum; i++) {
  const command = input[i].trim();
  const pattern = /^P [a-z]$/; // regular expression pattern for 'P $'
  if (pattern.test(command)) {
    const letter = command.charAt(2);
    addNode(letter);
  }
  if (command == 'B') {
    deleteNode();
  }
  if (command == 'L') {
    if (cur.value !== null) cur = cur.prev; //이렇게 해야 더미헤드를 가리킬 수 있음
  }
  if (command == 'D') {
    if (cur.next !== null) cur = cur.next; //이상 없음
  }
}
cur = list.head;

let answer = '';

while (cur.next !== null) {
  cur = cur.next;
  answer += cur.value;
}

answer = answer.trim();
console.log(answer);
