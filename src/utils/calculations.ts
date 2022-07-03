// Models
import { Transaction, TransactionType } from 'src/services/models/transactions'

export const getTotal = (
  transactions: Transaction[],
  type: TransactionType
): number => {
  return transactions
    .filter((transaction) => transaction.type === type)
    .reduce(
      (previousValue, transaction) => previousValue + transaction.amount,
      0
    )
}

export const getAvailableFunds = (transactions: Transaction[]) => {
  const deposits = getTotal(transactions, TransactionType.DEPOSIT)
  const withdrawals = getTotalWithdrawalsMade(transactions)
  const interestEarned = getTotalInterestEarned(transactions)
  const investments = getTotalInvestmentsMade(transactions)
  return deposits + interestEarned - withdrawals - investments
}

export const getTotalWithdrawalsMade = (transactions: Transaction[]) => {
  return getTotal(transactions, TransactionType.WITHDRAW)
}

export const getTotalInterestEarned = (transactions: Transaction[]) => {
  return getTotal(transactions, TransactionType.INTEREST)
}

export const getTotalInvestmentsMade = (transactions: Transaction[]) => {
  return getTotal(transactions, TransactionType.INVESTMENT)
}
