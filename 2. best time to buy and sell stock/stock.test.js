const { profit, get_lowest_index, get_prices_larger_than_lowest_price } = require("./stock");

describe("Function to index of lowest value in array", () => {
    test("in: [5, 3, 1], out: 2", () => {
        expect(get_lowest_index([5, 3, 1])).toBe(2);
    });

    test("in: [0], out: 0", () => {
        expect(get_lowest_index([0])).toBe(0);
    });

    test("in: [3, 1, 5, 6], out: 0", () => {
        expect(get_lowest_index([3, 1, 5, 6])).toBe(1);
    });
});

describe("Function to get all large values greater than the price of the lowest index", () => {
    test("in: [5, 3, 1], out: []", () => {
        expect(get_prices_larger_than_lowest_price([5, 3, 1])).toStrictEqual([]);
    });

    test("in: [5, 1, 2, 6], out: [2, 6]", () => {
        expect(get_prices_larger_than_lowest_price([5, 1, 2, 6])).toStrictEqual([2, 6]);
    });
});

describe(`You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.`, () => {
    test("in: [7, 1, 5, 3, 6, 4], out: 5", () => {
        expect(profit([7, 1, 5, 3, 6, 4])).toBe(5);
    });
    test("in: [7, 6, 4, 3, 1], out: 0", () => {
        expect(profit([7, 6, 4, 3, 1])).toBe(0);
    });

    test("in: [2,4,1], out: 2", () => {
        expect(profit([2, 4, 1])).toBe(2);
    });
});
