/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (i=0;i<nums.length;i++){
        for (j=i+1;j<nums.length;j++){
            complement = target - nums[i];

            if (nums[j] == complement){
                return arrayIndex=[i,j]
            }
        }
    }
    
};