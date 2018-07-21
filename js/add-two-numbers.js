function ListNode (val) {
  this.val = val
  this.next = null
}
/**
 * @param {ListNode} l1 头节点
 * @param {ListNode} l2 头节点
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let Head = new ListNode(0)
  let curr = Head
  // 代表进位
  let carry = 0

  while (l1 != null || l2 != null) {
    let val1 = l1 != null ? l1.val : 0
    let val2 = l2 != null ? l2.val : 0
    let s = val1 + val2 + carry
    // 大于9则进1位
    if (s > 9) {
      curr.next = new ListNode(s - 10)
      carry = 1
    } else {
      curr.next = new ListNode(s)
      carry = 0
    }
    curr = curr.next

    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
  }

  // 最高位进一位
  if (carry) {
    curr.next = new ListNode(1)
  }

  return Head.next
}
