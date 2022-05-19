/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/**
cond.
1. exactly one solution.
2. exactly two numbers are added up.
3. less than O(n^2) time complextity.
*/
var twoSum = function(nums, target) {
    const hash = {};
    for (let idx = 0; idx < nums.length; ++idx) {
        const pair = target - nums[idx];
        if (hash[pair.toString()] !== undefined) {
            return [idx, hash[pair.toString()]];
        }
        hash[nums[idx]] = idx;
    }
};