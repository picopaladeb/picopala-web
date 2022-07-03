import { useState } from 'react'
import { supabase } from 'src/utils/supabaseClient'
import { useForm } from 'react-hook-form'
import cx from 'classnames'
import { toast } from 'react-toastify'
// Utils
import { isEmailValid } from 'src/utils/common'

interface UserSignup {
  email: string
  password: string
}

const SignUpWithEmailAndPassword = (): JSX.Element => {
  const [loading, setLoading] = useState(false)

  const onSignUpWithEmailAndPassword = async ({
    email,
    password,
  }: UserSignup) => {
    try {
      setLoading(true)
      const { error } = await supabase.auth.signUp({ email, password })
      if (error) throw error
      toast.success(
        'User created! Go to your email box and confirm your email 💪🏼'
      )
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

  const onSubmit = async (data: any) => await onSignUpWithEmailAndPassword(data)

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
        <div>
          <button
            type="submit"
            className=" w-full h-10 rounded bg-orange-500"
            disabled={loading}
          >
            <span className="font-bold text-white">
              {loading ? 'Loading...' : 'Sign up'}
            </span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default SignUpWithEmailAndPassword
