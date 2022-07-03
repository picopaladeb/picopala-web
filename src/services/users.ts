import { supabase } from 'src/utils/supabaseClient'

export const getUser = async (
  email: string
): Promise<{ data: { id: string }[] | null; error: any }> => {
  const { data, error } = await supabase
    .from('users')
    .select('id')
    .eq('email', email)
  return { data, error }
}
