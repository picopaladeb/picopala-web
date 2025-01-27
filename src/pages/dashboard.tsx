import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { nextMonday, differenceInDays, add, format } from 'date-fns'
// Components
import MainLayout from 'src/layouts'
import TransactionsTable from 'src/components/transactionsTable'
import ContactModal from 'src/components/contactModal'
import InvestFunds from 'src/components/investFunds'
// Utils
import { formatAsCurrency } from 'src/utils/formatters'
import { useRequest } from 'src/utils/hooks/useRequest'
import {
  getAvailableFunds,
  getTotalInterestEarned,
  getTotalInvestmentsMade,
} from 'src/utils/calculations'
// Models
import { PageWithMainLayout } from 'src/models/nextPage'
import { Transaction } from 'src/services/models/transactions'
// Services
import { getTransactions } from 'src/services/transactions'

const Dashboard: NextPage = () => {
  const [availableFunds, setAvailableFunds] = useState(0)
  const [investedFunds, setInvestedFunds] = useState(0)
  const [totalInterestEarned, setTotalInterestEarned] = useState(0)
  const nextInterestPayment = nextMonday(new Date())

  const dateCapitalBack = (date: Date) => {
    return add(date, { years: 2 })
  }
  const daysToGetCapitalBack = (date: Date) => {
    return differenceInDays(dateCapitalBack(date), new Date())
  }

  const {
    loading,
    error,
    result: transactions,
    makeRequest,
  } = useRequest<Transaction[]>(() => getTransactions())

  useEffect(() => {
    if (transactions) {
      setAvailableFunds(getAvailableFunds(transactions))
      setTotalInterestEarned(getTotalInterestEarned(transactions))
      setInvestedFunds(getTotalInvestmentsMade(transactions))
    }
  }, [transactions])

  return (
    <div className="text-gray-800">
      <div className="text-2xl md:text-3xl font-bold pb-6">Your dashboard</div>
      <div className="lg:flex">
        <div className="lg:mr-3 flex flex-col lg:flex-1 border border-slate-400 rounded-lg p-4 md:p-8 shadow-lg mb-6">
          <div className="text-xl text-orange-500 pb-6">Your funds</div>
          <div className="divide-y-2">
            <div className="flex justify-evenly pb-4">
              <div className="flex flex-col items-center">
                <div className="text-lg font-bold">
                  {formatAsCurrency(availableFunds)}
                </div>
                <div>Available funds</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-lg font-bold">
                  {formatAsCurrency(totalInterestEarned)}
                </div>
                <div>Total interest earned</div>
              </div>
            </div>
            <div className="pt-4">
              <div className="flex flex-col items-center pb-4">
                <div className="text-lg font-bold">
                  {format(nextInterestPayment, 'PP')}
                </div>
                <div>Next interest payment</div>
              </div>
            </div>
          </div>
          <div className="mt-auto">
            <ContactModal />
          </div>
        </div>
        <div className="lg:ml-3 lg:flex-1 border border-slate-400 rounded-lg p-4 md:p-8 shadow-lg mb-6">
          <div className="text-xl text-orange-500 pb-6">Your investments</div>
          <div className="divide-y-2 pb-4">
            <div className="flex flex-col items-center pb-4">
              <div className="text-lg font-bold">
                {formatAsCurrency(investedFunds)}
              </div>
              <div>Total invested funds</div>
            </div>
            <div className="pt-4">
              <div className="flex justify-evenly pb-6">
                <div className="flex flex-col items-center">
                  <div className="text-lg font-bold">2 years</div>
                  <div>Term</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-lg font-bold">1%</div>
                  <div>APY</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-lg font-bold">Every monday</div>
                  <div>Interest payments</div>
                </div>
              </div>
            </div>
          </div>
          {availableFunds > 0 && (
            <div>
              <InvestFunds
                availableFunds={availableFunds}
                onInvestFunds={makeRequest}
              />
            </div>
          )}
        </div>
      </div>

      <div className="md:pb-24">
        <div className="text-xl text-orange-500 pb-6">
          Historic transactions
        </div>
        {loading && <div>Loading transactions...</div>}
        {transactions && (
          <>
            {transactions.length > 0 ? (
              <div>
                <TransactionsTable transactions={transactions} />
              </div>
            ) : (
              <div>You haven&apos;t made any transactions yet</div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

;(Dashboard as PageWithMainLayout).layout = MainLayout

export default Dashboard
