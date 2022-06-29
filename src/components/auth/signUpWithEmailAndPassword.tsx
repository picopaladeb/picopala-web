import { useState } from 'react'
import { supabase } from 'src/utils/supabaseClient'

const SignUpWithEmailAndPassword = (): JSX.Element => {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSignUpWithEmailAndPassword = async () => {
    try {
      setLoading(true)
      const { error } = await supabase.auth.signUp({ email, password })
      if (error) throw error
    } catch (error: any) {
      alert(error.error_description || error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <div className="pb-2">
        <div>Email</div>
        <input
          className="w-full h-10 border border-slate-400 rounded"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="pb-6">
        <div>Password</div>
        <input
          className="w-full h-10 border border-slate-400 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button
          onClick={(e) => {
            e.preventDefault()
            onSignUpWithEmailAndPassword()
          }}
          className=" w-full h-10 rounded bg-orange-500"
          disabled={loading}
        >
          <span className="font-bold text-white">
            {loading ? 'Loading' : 'Sign up'}
          </span>
        </button>
      </div>
    </div>
  )
}

export default SignUpWithEmailAndPassword
