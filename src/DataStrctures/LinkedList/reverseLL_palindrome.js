class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function reverseLinkedList(head) {
  let prev = null;
  let curr = head;

  while (curr !== null) {
    //console.log(curr)
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}
function ispalindrome(head) {
  let curr = "";
  let prev = "";
  //console.log(head)
  while (head !== null) {
    curr = curr + `${head.val}`;
    prev = head.val + prev;
    head = head.next;
  }
  console.log(curr, prev);
  return curr === prev;
}

// Example usage
const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
//console.log(reverseLinkedList(head));
console.log(ispalindrome(head)); // ListNode { val: 4, next: ListNode { val: 3, next: ListNode { val: 2, next: ListNode { val: 1, next: null } } } }
