const get_lowest_index = (prices = []) => {
    let lowestIndex = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] <= prices[lowestIndex]) {
            lowestIndex = i;
        }
    }

    return lowestIndex;
};

const get_prices_larger_than_lowest_price = (prices = [], index = 0) => {
    const startIndex = index + 1;
    const pricesLength = prices.length;

    // slice the prices array to that we only search for numbers after the lowest index
    const sliceIndex = startIndex < pricesLength ? startIndex : index;
    const splitList = prices.slice(sliceIndex);
    const lowestPrice = prices[index];

    // get only numbers larger than that number at that index
    return splitList.filter((value) => {
        return value > lowestPrice;
    });
};

const getLargestProfit = (higherPrices = [], comparePrice = 0) => {
    let largestProfit = 0;

    for (let price of higherPrices) {
        const difference = price - comparePrice;
        if (largestProfit < difference) {
            largestProfit = difference;
        }
    }

    return largestProfit;
};

const profit = (prices = []) => {
    // new thought:
    /*
     * go through each price,
     * check if price is smaller than the current smallest price
     * replace if so, otherwise
     * check difference in profit between lowestPrice + currentPrice > largest profit
     *
     */

    //  keep track of lowest prices
    let lowestPrice = Math.pow(10, 4); // constraint from blind 75 challenge (highest possible value)
    let profit = 0;
    //  go through each price
    for (let i = 0; i < prices.length; i++) {
        const currentPrice = prices[i];

        if (currentPrice < lowestPrice) {
            lowestPrice = currentPrice;
        } else {
            // currentPrice is larger than lowestPrice
            const difference = currentPrice - lowestPrice;
            if (difference > profit) {
                profit = difference;
            }
        }
    }

    return profit;
};

module.exports = {
    get_lowest_index,
    get_prices_larger_than_lowest_price,
    profit,
};
