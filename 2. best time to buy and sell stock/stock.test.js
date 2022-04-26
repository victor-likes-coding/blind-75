const { profit } = require("./stock");

describe(`You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.`, () => {
    test("in: [7, 1, 5, 3, 6, 4], out: 5", () => {
        expect(profit([7, 1, 5, 3, 6, 4])).toBe(5);
    });
    test("in: [7, 6, 4, 3, 1], out: 0", () => {
        expect(profit([7, 6, 4, 3, 1])).toBe(0);
    });
});
