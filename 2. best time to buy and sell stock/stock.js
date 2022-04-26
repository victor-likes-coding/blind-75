const get_lowest_index = (prices = []) => {
    let lowestIndex = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] <= prices[lowestIndex]) {
            lowestIndex = i;
        }
    }

    return lowestIndex;
};

const get_prices_larger_than_lowest_price = (prices = []) => {
    // get lowest index or if it's the last item
    const lowestIndex = get_lowest_index(prices);
    const startIndex = lowestIndex + 1;
    const pricesLength = prices.length;

    // slice the prices array to that we only search for numbers after the lowest index
    const sliceIndex = startIndex < pricesLength ? startIndex : lowestIndex;
    const splitList = prices.slice(sliceIndex);
    const lowestPrice = prices[lowestIndex];

    // get only numbers larger than that number at that index
    return splitList.filter((value) => {
        return value > lowestPrice;
    });
};
