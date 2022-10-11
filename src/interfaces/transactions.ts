import { TransactionStatus } from '@usedapp/core';
import type { TransactionReceipt } from '@ethersproject/abstract-provider';

interface EventsTransactionStatus {
  address: string;
  blockHash: string;
  blockNumber: number;
  data: string;
  logIndex: number;
  topics: string[];
  transactionHash: string;
  transactionIndex: number;
}

interface EventsTransactionReceipt extends TransactionReceipt {
  events?: EventsTransactionStatus[];
}

export interface StateTransactionStatus extends TransactionStatus {
  receipt?: EventsTransactionReceipt;
}
