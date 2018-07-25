class Solution:
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
        if len(s) < 2:
            return len(s)

        map = {}
        left = 0
        ans = 0

        for i in range(len(s)):
            global left

            if s[i] in map and map[s[i]] >= left:
              left = map[s[i]] + 1

            map[s[i]] = i

            c = i - left + 1

            if c > ans:
                ans = c

        return ans
