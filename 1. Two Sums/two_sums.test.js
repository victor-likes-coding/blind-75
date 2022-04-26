const { twoSums } = require("./two_sums");

describe(`Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.`, () => {
    test("in: [2,7, 11, 15], target = 9, out: [0, 1]", () => {
        expect(twoSums([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
    });

    test("in: [3,2,4], target = 6, out: [1,2]", () => {
        expect(twoSums([3, 2, 4], 6)).toStrictEqual([1, 2]);
    });

    test("in: [3,3], target = 6, out: [0,1]", () => {
        expect(twoSums([3, 3], 6)).toStrictEqual([0, 1]);
    });
});
