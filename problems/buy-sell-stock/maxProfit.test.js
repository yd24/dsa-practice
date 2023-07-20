const maxProfit = require('./maxProfit');
import {describe, test, expect} from 'vitest';

describe('Testing maxProfit function', () => {
  test('Testing case where profit can be made', () => {
    let prices = [7,1,5,3,6,4];
    let profit = maxProfit(prices);
    expect(profit).toEqual(5);
  });

  test('Testing case where profit cannot be made', () => {
    let prices = [7,6,4,3,1];
    let profit = maxProfit(prices);
    expect(profit).toEqual(0);
  });

  test('Testing case where there are only 2 days', () => {
    let prices = [1, 4];
    let profit = maxProfit(prices);
    expect(profit).toEqual(3);
  });

  test('Testing case where there is only 1 day', () => {
    let prices = [1];
    let profit = maxProfit(prices);
    expect(profit).toEqual(0);
  });
});