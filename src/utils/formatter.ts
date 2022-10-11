import type { BigNumberish } from '@ethersproject/bignumber';
import { ethers } from 'ethers';

// eslint-disable-next-line import/prefer-default-export
export const formatBigNumber = (value: BigNumberish) =>
  ethers.BigNumber.isBigNumber(value) ? ethers.BigNumber.from(value).toNumber() : 0;
