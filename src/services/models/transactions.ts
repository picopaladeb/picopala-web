export const enum TransactionType {
  DEPOSIT = 'deposit',
  WITHDRAW = 'withdraw',
  INTEREST = 'interest',
  INVESTMENT = 'investment',
}
export interface Transaction {
  id: string
  created_at: Date
  amount: number
  type: TransactionType
  user_id: string
}
