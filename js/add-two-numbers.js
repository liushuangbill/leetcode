function ListNode(val) {
  this.val = val
  this.next = null
}
/**
 * @param {ListNode} l1 头节点
 * @param {ListNode} l2 头节点
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const Head = new ListNode(0)
  let curr = Head
  // 代表进位
  let carray = 0

  while (l1 || l2) {
    const val1 = l1 ? l1.val : 0
    const val2 = l2 ? l2.val : 0
    const s = val1 + val2 + carray
    if (s > 9) {
      curr.next = new ListNode(s - 10)
      carray = 1
    } else {
      curr.next = new ListNode(s)
      carray = 0
    }
    curr = curr.next
    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
  }

  if (carray) {
    curr.next = new ListNode(1)
  }

  return Head.next
};
