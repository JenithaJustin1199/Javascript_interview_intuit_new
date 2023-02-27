class listNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
function mergeLinkedList(head1, head2) {
  let l3 = new listNode();
  let prev = l3;
  while (head1 !== null && head2 !== null) {
    if (head1.value <= head2.value) {
      l3.next = new listNode(head1.value);
      head1 = head1.next;
    } else {
      l3.next = new listNode(head2.value);
      head1 = head2.next;
    }
    //console.log(prev)
    l3 = l3.next;
  }
  if (head1 == null) {
    l3.next = head2;
  }
  if (head2 == null) {
    l3.next = head1;
  }
  return prev.next;
}
function intersectionLinkedList(list1, list2) {
  let dataSet = new Set();
  while (list1 !== null) {
    dataSet.add(list1.value);
    list1 = list1.next;
  }
  while (list2 !== null) {
    if (dataSet.has(list2.value)) {
      return list2.value;
    }
    list2 = list2.next;
  }
  return -1;
}
const head1 = new listNode(
  1,
  new listNode(2, new listNode(3, new listNode(4, new listNode(5))))
);
const head2 = new listNode(
  5,
  new listNode(7, new listNode(8, new listNode(9, new listNode(10))))
);
console.log(intersectionLinkedList(head1, head2));
console.log(mergeLinkedList(head1, head2));
