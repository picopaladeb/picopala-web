import Link from 'next/link'
import { useRouter } from 'next/router'

const Navbar = (): JSX.Element => {
  const router = useRouter()

  const logOut = (): void => {
    router.push('/')
  }

  return (
    <nav className="bg-orange-500 shadow-md py-2">
      <div className="max-w-7xl mx-auto px-4 py-3 md:py-0">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div className="w-60">
              <Link href="/">
                <a>
                  <img
                    src="/logopicopala_white.png"
                    alt="logo"
                    className="w-52"
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3 ">
            {/* <div className="flex flex-row items-center">
              <div className="py-2 px-2 font-medium text-gray-500 rounded  hover:text-white transition duration-300">
                Tomas Gil
              </div>
              <button
                onClick={logOut}
                className="font-bold py-2 px-2 text-white bg-primary-light rounded hover:bg-primary transition duration-300"
              >
                Log out
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
