import { useState } from 'react'
import { supabase } from 'src/utils/supabaseClient'
import { useForm } from 'react-hook-form'
import cx from 'classnames'
// Utils
import { isEmailValid } from 'src/utils/common'

interface UserSignup {
  email: string
  password: string
}

const SignInWithEmailAndPassword = (): JSX.Element => {
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const onSignInWithEmailAndPassword = async ({
    email,
    password,
  }: UserSignup) => {
    try {
      setErrorMessage('')
      setLoading(true)
      const { error } = await supabase.auth.signIn(
        { email, password },
        { redirectTo: 'http://localhost:3000/dashboard' }
      )

      if (error) throw error
    } catch (error: any) {
      setErrorMessage(error.error_description || error.message)
    } finally {
      setLoading(false)
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data: any) => await onSignInWithEmailAndPassword(data)

  const emailStyles = cx('w-full h-10 border rounded outline-1 px-1', {
    'border-red-500': errors.email,
    'border-slate-400': !errors.email,
  })
  const passwordStyles = cx('w-full h-10 border rounded outline-1 px-1', {
    'border-red-500': errors.password,
    'border-slate-400': !errors.password,
  })

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="pb-2">
          <div>Email</div>
          <input
            className={emailStyles}
            type="email"
            {...register('email', { required: true, validate: isEmailValid })}
          />
          {errors.email && <span className="text-red-500">Invalid email</span>}
        </div>
        <div className="pb-6">
          <div>Password</div>
          <input
            className={passwordStyles}
            {...register('password', { required: true })}
          />
          {errors.password && (
            <span className="text-red-500">Please, enter a password</span>
          )}
        </div>
        {errorMessage && (
          <div className="text-red-500 pb-6">{errorMessage}</div>
        )}
        <div>
          <button
            type="submit"
            className=" w-full h-10 rounded bg-orange-500"
            disabled={loading}
          >
            <span className="font-bold text-white">
              {loading ? 'Loading' : 'Sign in'}
            </span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default SignInWithEmailAndPassword
