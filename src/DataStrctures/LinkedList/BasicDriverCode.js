export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
export class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  append(value) {
    let newNode = new Node(value);
    if (this.isEmpty) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }
  prepend(value) {
    let newNode = new Node(value);
    if (this.isEmpty) {
      this.head = newNode;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = newNode;
    }
    this.size++;
  }
  print(value) {
    if (this.isEmpty) {
      console.log("Empty LinkedList");
    } else {
      let curr = this.head;
      let value = " ";
      while (curr) {
        value += `${curr.value}`;
        curr = curr.next;
      }
      console.log(value);
    }
  }
}
