import Link from 'next/link'
import { useRouter } from 'next/router'

const Navbar = (): JSX.Element => {
  const router = useRouter()

  const logOut = (): void => {
    router.push('/')
  }

  return (
    <nav className="bg-white shadow-lg py-2">
      <div className="max-w-6xl mx-auto px-4 py-3 md:py-0">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div className="text-primary font-bold text-3xl self-center">
              <Link href="/">Dev Metrics</Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3 ">
            <div className="flex flex-row items-center">
              <div className="py-2 px-2 font-medium text-gray-500 rounded  hover:text-white transition duration-300">
                Tomas Gil
              </div>
              <button
                onClick={logOut}
                className="font-bold py-2 px-2 text-white bg-primary-light rounded hover:bg-primary transition duration-300"
              >
                Log out
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
