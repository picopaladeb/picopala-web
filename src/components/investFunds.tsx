import { useState } from 'react'
import { useForm } from 'react-hook-form'
import cx from 'classnames'
import { toast } from 'react-toastify'
// Models
import { TransactionType } from 'src/services/models/transactions'
// Services
import { addTransaction } from 'src/services/transactions'
// Utils
import { useAuth } from 'src/contexts/auth'

const InvestFunds = ({
  availableFunds,
  onInvestFunds,
}: {
  availableFunds: number
  onInvestFunds: any
}) => {
  const user = useAuth()
  const [loading, setLoading] = useState(false)

  const onSubmitInvestFunds = async ({ amount }: { amount: number }) => {
    try {
      setLoading(true)
      if (!user?.id) throw 'No user logged in. Refresh page and try again.'
      const { data, error } = await addTransaction({
        userId: user.id,
        amount,
        type_tx: TransactionType.INVESTMENT,
      })
      if (error) throw error
      toast.success('Transaction saved! 💪🏼')
      await onInvestFunds()
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

  const onSubmit = async (data: any) => await onSubmitInvestFunds(data)

  const amountStyles = cx('w-full h-10 border rounded outline-1 px-1', {
    'border-red-500': errors.email,
    'border-slate-400': !errors.email,
  })

  const isAmountValid = (value: number) => {
    return availableFunds >= value
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="pb-2">
        <div>Amount</div>
        <input
          className={amountStyles}
          type="number"
          step="any"
          {...register('amount', { required: true, validate: isAmountValid })}
        />
        {(errors.amount?.type as any) === 'required' && (
          <span className="text-red-500">Enter an amount</span>
        )}
        {(errors.amount?.type as any) === 'validate' && (
          <span className="text-red-500">Yo dont have enough funds</span>
        )}
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="h-10 rounded border mr-3 md:mx-0 px-3 border-orange-500 text-orange-500 font-bold"
        >
          {loading ? 'Investing funds...' : 'Invest funds'}
        </button>
      </div>
    </form>
  )
}

export default InvestFunds
