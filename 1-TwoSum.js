/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length ; i++){
        for(let x = nums.length - 1; x>= 0 ; x--){
            if (nums[i] + nums[x] == target && i != x){
              return console.log([i, x])
            }
        }
    }
};

twoSum([3,2,4],6);
twoSum([3,3], 6);