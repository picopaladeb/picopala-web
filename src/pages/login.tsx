import type { NextPage } from 'next'
// Components
import Link from 'next/link'
import MainLayout from 'src/layouts'
import SignInWithGoogle from 'src/components/auth/signInWithGoogle'
import SignInWithEmailAndPassword from 'src/components/auth/signInWithEmailAndPassword'
// Models
import { PageWithMainLayout } from 'src/models/nextPage'

const Login: NextPage = () => {
  return (
    <div className="w-80 mx-auto">
      <div className="text-center text-3xl pb-6">Welcome back to Picopala!</div>
      <div className="pb-4">
        <SignInWithEmailAndPassword />
      </div>
      <div className="pb-4">
        <SignInWithGoogle signUp={false} />
      </div>
      <div>
        You do not have an account?{' '}
        <Link href="/signup">
          <a className="text-orange-500">Sign up</a>
        </Link>
      </div>
    </div>
  )
}

;(Login as PageWithMainLayout).layout = MainLayout

export default Login
