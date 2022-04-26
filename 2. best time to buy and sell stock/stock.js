const get_lowest_index = (prices = []) => {
    let lowestIndex = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] <= prices[lowestIndex]) {
            lowestIndex = i;
        }
    }

    return lowestIndex;
};

