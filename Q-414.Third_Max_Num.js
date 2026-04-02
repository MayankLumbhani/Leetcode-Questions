var thirdMax = function(nums) {
    
    let max;
    let count = 0;
    let firstMax;  
    
    while (count < 3 && nums.length > 0) {
        
        max = -Infinity;
        
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > max) {
                max = nums[i];
            }
        }
        
        if (count === 0) {
            firstMax = max; 
        }
        
        for (let i = nums.length - 1; i >= 0; i--) {
            if (nums[i] === max) {
                nums.splice(i, 1);
            }
        }
        
        count++;
    }
    
    return count < 3 ? firstMax : max;
};