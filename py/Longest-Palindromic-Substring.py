class Solution:
    def longestPalindrome(self, s):
        """
        :type s: str
        :rtype: str
        """
        if len(s) < 2:
            return s
        
        ans = ''
        sLen = len(s)
        
        # 回文子串长度为奇数，对称点只有一个字符
        for i in range(sLen):
            ss = self.getPalindromic(sLen, s, i, i)

            if len(ss) > len(ans):
                ans = ss
                
        # 回文子串长度为偶数，对称点有两个
        for i in range(sLen - 1):
            if s[i] == s[i + 1]:
                ss = self.getPalindromic(sLen, s, i, i + 1)

                if len(ss) > len(ans):
                    ans = ss
        
        return ans
    
    def getPalindromic(self, sLen, s, left, right):
        while left > 0 and right < sLen - 1 and s[left - 1] == s[right + 1]:
            left -= 1
            right += 1
        
        return s[left:right + 1]
           