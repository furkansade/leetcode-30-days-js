/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    // solution
    var result = init;

    for(const num of nums) {
        result = fn(result, num);
    }

    return result;
};