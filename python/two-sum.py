class Solution:
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        map = {}
        for i in range(len(nums)):
            cc = target - nums[i]
            if map.__contains__(cc) and map[cc] != i:
                return [map[cc], i]
            map[nums[i]] = i
            