function modifyArray(nums) {
    return nums.map(function (number) {
        return number % 2 == 0 ? (number *= 2) : (number *= 3);
    });
}
