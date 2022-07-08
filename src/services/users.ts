import { supabase } from 'src/utils/supabaseClient'

export const getUser = async (
  email: string
): Promise<{ data: { id: string }[] | null; error: any }> => {
  const response = await supabase.from('users').select('id').eq('email', email)
  console.log('response', response)
  const { data, error } = response
  return { data, error }
}
