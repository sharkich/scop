import BigNumber from 'bignumber.js';

const TEN = 10;
const DEFAULT_DECIMALS = 6;

export const getBalanceBigNumber = (input: BigNumber, decimals: number = DEFAULT_DECIMALS) =>
  input.div(new BigNumber(TEN).pow(decimals));
