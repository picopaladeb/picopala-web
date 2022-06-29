import { useState } from 'react'
import { supabase } from 'src/utils/supabaseClient'
// Components
import Image from 'next/image'

const SignUpWithGoogle = ({ signUp }: { signUp: boolean }): JSX.Element => {
  const [loading, setLoading] = useState(false)

  const onSignInWithGoogle = async () => {
    try {
      setLoading(true)
      const { user, session, error } = await supabase.auth.signIn({
        provider: 'google',
      })
      console.log('user', user)
      if (error) throw error
    } catch (error: any) {
      alert(error.error_description || error.message)
    } finally {
      setLoading(false)
    }
  }

  const buttonText = signUp ? 'Sign up with Google' : 'Sign in with Google'

  return (
    <div>
      <button
        onClick={(e) => {
          e.preventDefault()
          onSignInWithGoogle()
        }}
        className="w-full h-10 border border-slate-400 rounded"
        disabled={loading}
      >
        <div className="flex items-center justify-center">
          <Image src="/logogoogle.png" alt="me" width="16" height="16" />
          <span className="pl-2 pb-1">{loading ? 'Loading' : buttonText}</span>
        </div>
      </button>
    </div>
  )
}

export default SignUpWithGoogle
