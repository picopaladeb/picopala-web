import type { NextPage } from 'next'
// Components
import Link from 'next/link'
import MainLayout from 'src/layouts'
import SignInWithGoogle from 'src/components/auth/signInWithGoogle'
import SignUpWithEmailAndPassword from 'src/components/auth/signUpWithEmailAndPassword'
// Models
import { PageWithMainLayout } from 'src/models/nextPage'

const Auth: NextPage = () => {
  return (
    <div className="w-80 mx-auto">
      <div className="text-center text-3xl pb-6">Welcome to Picopala!</div>
      <div className="pb-4">
        <SignUpWithEmailAndPassword />
      </div>
      <div className="pb-4">
        <SignInWithGoogle signUp={true} />
      </div>
      <div>
        Already registered?{' '}
        <Link href="/login">
          <a className="text-orange-500">Log in</a>
        </Link>
      </div>
    </div>
  )
}

;(Auth as PageWithMainLayout).layout = MainLayout

export default Auth
