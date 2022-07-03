import { v4 as uuidv4 } from 'uuid'
import { supabase } from 'src/utils/supabaseClient'
// Models
import { TransactionType, Transaction } from 'src/services/models/transactions'

export const addTransaction = async ({
  userId,
  amount,
  type,
}: {
  userId: string
  amount: number
  type: TransactionType
}): Promise<{ data: Transaction[] | null; error: any }> => {
  const id = uuidv4()
  const created_at = new Date()
  const { data, error } = await supabase
    .from('transactions')
    .insert([{ id, user_id: userId, amount, created_at, type }])
  return { data, error }
}

export const getTransactions = async (): Promise<{
  data: Transaction[] | null
  error: any
}> => {
  const { data, error } = await supabase.from('transactions').select('*')
  return { data, error }
}
