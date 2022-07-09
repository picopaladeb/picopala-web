import { format } from 'date-fns'
// Models
import { Transaction } from 'src/services/models/transactions'
// Utils
import { formatAsCurrency, capitalizeFirstLetter } from 'src/utils/formatters'

const TransactionsTable = ({
  transactions,
}: {
  transactions: Transaction[]
}): JSX.Element => {
  const sortedTransactions = transactions
    .deepCopy()
    .sortByKey('created_at', 'desc')
  const formatAmount = (amount: number): string => {
    return formatAsCurrency(amount)
  }
  return (
    <div className="shadow-sm overflow-hidden py-8  rounded-lg">
      <table className="border-collapse table-auto w-full text-sm">
        <thead>
          <tr>
            <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
              Date
            </th>
            <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
              Amount
            </th>
            <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
              Type
            </th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-slate-800">
          {sortedTransactions.map((transaction) => (
            <tr key={transaction.created_at as any}>
              <td className="border-b border-slate-300 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                {format(new Date(transaction.created_at), 'PP')}
              </td>

              <td className="border-b border-slate-300 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                {formatAmount(transaction.amount)}
              </td>
              <td className="border-b border-slate-300 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                {capitalizeFirstLetter(transaction.type_tx)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TransactionsTable
