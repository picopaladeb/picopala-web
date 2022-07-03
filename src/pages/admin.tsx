import { useState } from 'react'
import type { NextPage } from 'next'
import { useForm } from 'react-hook-form'
import cx from 'classnames'
// Components
import MainLayout from 'src/layouts'
import AddTransaction from 'src/components/addTransaction'
import Link from 'next/link'
// Models
import { PageWithMainLayout } from 'src/models/nextPage'
// Utils
import { isEmailValid } from 'src/utils/common'
import { useAuth } from 'src/contexts/auth'
// Services
import { getUser } from 'src/services/users'

const Admin: NextPage = () => {
  const userLoggedIn = useAuth()

  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState<{ id: string } | null>(null)
  const [errorMessage, setErrorMessage] = useState('')

  const onSearchUser = async ({ email }: { email: string }) => {
    setLoading(true)
    setErrorMessage('')
    try {
      const result = await getUser(email)
      if (!result.data || result.data.length === 0) {
        setErrorMessage('User not found')
      } else {
        setUser(result.data[0])
      }
    } catch (err: any) {
      setErrorMessage(err.description || err.message)
    } finally {
      setLoading(false)
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  if (userLoggedIn?.email !== process.env.NEXT_PUBLIC_ADMIN) {
    return (
      <div>
        You are not an admin.{' '}
        <Link href="/">
          <a>Go back to home</a>
        </Link>{' '}
      </div>
    )
  }

  const onSubmit = async (data: any) => await onSearchUser(data)

  const emailStyles = cx('w-full h-10 border rounded outline-1 px-1', {
    'border-red-500': errors.email,
    'border-slate-400': !errors.email,
  })

  return (
    <div>
      <div className="w-80 mx-auto pb-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="pb-2">
            <div>User email</div>
            <input
              className={emailStyles}
              type="email"
              {...register('email', { required: true, validate: isEmailValid })}
            />
            {errors.email && (
              <span className="text-red-500">Invalid email</span>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="w-full h-10 rounded bg-orange-500"
              disabled={loading}
            >
              <span className="font-bold text-white">
                {loading ? 'Loading...' : 'Select user'}
              </span>
            </button>
          </div>
        </form>
        {errorMessage && (
          <div className="text-red-500 pb-6">{errorMessage}</div>
        )}
      </div>
      {user && (
        <div>
          <div className="text-center pb-6">
            <span className="font-bold pr-2">User selected:</span>
            <span>{user.id}</span>
          </div>
          <AddTransaction userId={user.id} />
        </div>
      )}
    </div>
  )
}

;(Admin as PageWithMainLayout).layout = MainLayout

export default Admin
