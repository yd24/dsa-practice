function maxProfit (prices) {
  //keep track of max profit
  let maxProfit = 0
  //keep track of most profitable buy day
  let profitDay = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    //We check if current day has a lower price
    //than most profitable buy day
    if (prices[i] < prices[profitDay] || i === 0) {
      for (let j = i + 1; j < prices.length; j++) {
        let profit = prices[j] - prices[i];
        if (maxProfit < profit) {
          maxProfit = profit;
          //We set most profitable buy day
          profitDay = i;
        }
      }
    }
  }
  return maxProfit;
}

module.exports = maxProfit;