function getSecondLargest(nums) {
    var largest = -1;
    var secondLargest = -1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > largest) {
            largest = nums[i];
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == largest) {
            continue;
        } else {
            if (nums[i] > secondLargest) {
                secondLargest = nums[i];
            }
        }
    }

    return secondLargest;
}
