/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, 
return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let array = nums1.concat(nums2)
    array.sort((a, b) => a - b)
    if(array.length % 2 == 0){ 
        let result = (array[(array.length / 2)] + array[(array.length / 2) - 1]) / 2
        return result
    }
    return array[Math.floor(array.length / 2)]
};

let nums1 = [1,2,3,4,5]
let nums2 = [6,7,8,9,10,11,12,13,14,15,16,17]
console.log(findMedianSortedArrays(nums1, nums2))