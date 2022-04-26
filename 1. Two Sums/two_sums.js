const twoSums = (nums = [], target = 0) => {
    // o^n solution
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const [first, second] = [nums[i], nums[j]];
            if (first + second === target) {
                return [i, j];
            }
        }
    }
};

module.exports = {
    twoSums,
};
