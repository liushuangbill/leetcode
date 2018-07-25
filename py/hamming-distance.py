class Solution(object):
    def hammingDistance(self, x, y):
        """
        :type x: int
        :type y: int
        :rtype: int
        """
        x = bin(x ^ y)[2:]
        l = filter(lambda n: int(n) > 0, x)
        return len(list(l))