import { useState } from 'react'
import cx from 'classnames'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
// Models
import { TransactionType } from 'src/services/models/transactions'
// Utils
import {
  capitalizeFirstLetter,
  convertSatoshiToBitcoin,
} from 'src/utils/formatters'
// Services
import { addTransaction } from 'src/services/transactions'

const AddTransaction = ({ userId }: { userId: string }): JSX.Element => {
  const [loading, setLoading] = useState(false)
  const [isMeasureUnitBitcoin, setIsMeasureUnitBitcoin] = useState(true)

  const onAddTransactionToUser = async ({
    amount,
    transactionType,
  }: {
    amount: number
    transactionType: TransactionType
  }) => {
    try {
      setLoading(true)
      const amountInBitcoin = isMeasureUnitBitcoin
        ? amount
        : convertSatoshiToBitcoin(amount)
      const { data, error } = await addTransaction({
        userId,
        amount: amountInBitcoin,
        type_tx: transactionType,
      })
      if (error) throw error
      toast.success('Transaction saved! 💪🏼')
    } catch (error: any) {
      alert(error.error_description || error.message)
    } finally {
      setLoading(false)
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data: any) => await onAddTransactionToUser(data)

  const styleSatoshiButton = cx('w-full h-10 border rounded mr-2', {
    'bg-orange-300 border-slate-400 text-white': !isMeasureUnitBitcoin,
    'border-orange-500 text-orange-500': isMeasureUnitBitcoin,
  })

  const styleBitcoinButton = cx('w-full h-10 border rounded ml-2', {
    'bg-orange-300 border-slate-400 text-white': isMeasureUnitBitcoin,
    'border-orange-500 text-orange-500': !isMeasureUnitBitcoin,
  })

  const emailStyles = cx('w-full h-10 border rounded outline-1 px-1', {
    'border-red-500': errors.email,
    'border-slate-400': !errors.email,
  })

  return (
    <div>
      <div>
        <div className="pb-2">Select type of measure unit</div>
        <div className="flex pb-4">
          <button
            className={styleSatoshiButton}
            onClick={() => setIsMeasureUnitBitcoin(false)}
          >
            <span className="font-bold ">Satoshi</span>
          </button>
          <button
            className={styleBitcoinButton}
            onClick={() => setIsMeasureUnitBitcoin(true)}
          >
            <span className="font-bold">Bitcoin</span>
          </button>
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="pb-4">
            <div>Amount</div>
            <input
              className={emailStyles}
              type="number"
              {...register('amount', { required: true })}
            />
            {errors.amount && (
              <span className="text-red-500">Invalid amount</span>
            )}
          </div>
          <div>Transaction type</div>
          <div className="pb-6">
            <select
              className="w-full h-10 border border-slate-400"
              {...register('transactionType', { required: true })}
            >
              <option value={TransactionType.DEPOSIT}>
                {capitalizeFirstLetter(TransactionType.DEPOSIT)}
              </option>
              <option value={TransactionType.INTEREST}>
                {capitalizeFirstLetter(TransactionType.INTEREST)}
              </option>
              <option value={TransactionType.INVESTMENT}>
                {capitalizeFirstLetter(TransactionType.INVESTMENT)}
              </option>
              <option value={TransactionType.WITHDRAW}>
                {capitalizeFirstLetter(TransactionType.WITHDRAW)}
              </option>
            </select>
          </div>

          <div>
            <button
              type="submit"
              className="w-full h-10 rounded bg-orange-500"
              disabled={loading}
            >
              <span className="font-bold text-white">
                {loading ? 'Loading...' : 'Save transaction'}
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddTransaction
