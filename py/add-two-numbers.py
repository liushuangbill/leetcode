# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution:
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        Head = ListNode(0)
        curr = Head
        carry = 0

        while l1 or l2:
            global carry
            val1 = l1.val if l1 else 0
            val2 = l2.val if l2 else 0
            sum = val1 + val2 + carry

            if (sum > 9):
                curr.next = ListNode(sum - 10)
                carry = 1
            else:
                curr.next = ListNode(sum)
                carry = 0
            curr = curr.next

            if l1:
                l1 = l1.next
            if l2:
                l2 = l2.next

        if (carry):
            curr.next = ListNode(1)

        return Head.next
