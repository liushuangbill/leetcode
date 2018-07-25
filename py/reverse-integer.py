class Solution:
    def reverse(self, x):
        """
        :type x: int
        :rtype: int
        """
        if x < 0:
          return self.reverse(x * -1) * -1
        n = str(x)[::-1]
        n = int(n)
        # 长度溢出的情况
        if n > 2**31 - 1:
           return 0
        
        return n
        