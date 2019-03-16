function ListNode(val) {
  this.val = val
  this.next = null
}
/**
 * @param {ListNode} l1 头节点
 * @param {ListNode} l2 头节点
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const head = new ListNode(null)
  let cur = head
  let carry = 0
  
  while (l1 || l2 || carry) {
      let sum = carry
      if (l1) {
          sum += l1.val
          l1 = l1.next
      }
      if (l2) {
          sum += l2.val
          l2 = l2.next
      }
      
      carry = sum >= 10 ? 1 : 0
      cur.next = new ListNode(sum % 10)
      cur = cur.next
  }
  
  return head.next
};
