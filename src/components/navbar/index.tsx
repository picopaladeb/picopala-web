import { useState } from 'react'
import { useRouter } from 'next/router'
import { supabase } from 'src/utils/supabaseClient'
import cx from 'classnames'
// Components
import Link from 'next/link'
// Utils
import { useAuth } from 'src/contexts/auth'

const Navbar = (): JSX.Element => {
  const router = useRouter()
  const [displayMenu, setDisplayMenu] = useState(false)

  const logOut = async (): Promise<void> => {
    await supabase.auth.signOut()
    setDisplayMenu(false)
    router.push('/')
  }

  const user = useAuth()

  const menuStyles = cx('w-full md:block md:w-auto', { hidden: !displayMenu })

  const menuItems = () => {
    return (
      <>
        <li>
          <Link href="/about-us">
            <a>
              <button
                onClick={() => setDisplayMenu(false)}
                className="block py-2 pr-4 pl-3 text-white font-bold text-lg"
              >
                About us
              </button>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/enterprise-api">
            <a>
              <button
                onClick={() => setDisplayMenu(false)}
                className="block py-2 pr-4 pl-3 text-white font-bold text-lg"
              >
                Enterprise API
              </button>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/faqs">
            <a>
              <button
                onClick={() => setDisplayMenu(false)}
                className="block py-2 pr-4 pl-3 text-white font-bold text-lg"
              >
                FAQs
              </button>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/faqs">
            <a>
              <button
                onClick={() => setDisplayMenu(false)}
                className="block py-2 pr-4 pl-3 text-white font-bold text-lg"
              >
                Chat
              </button>
            </a>
          </Link>
        </li>
      </>
    )
  }

  return (
    <nav className="bg-orange-500  px-2 sm:px-4 py-2.5">
      <div className=" max-w-6xl flex flex-wrap justify-between items-center mx-auto">
        <div className="w-60">
          <Link href="/">
            <a>
              <img src="/logopicopala_white.png" alt="logo" className="w-52" />
            </a>
          </Link>
        </div>
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu"
          aria-expanded="false"
          onClick={(): void => setDisplayMenu(!displayMenu)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6 fill-white"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          <svg
            className="hidden w-6 h-6 fill-white"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className={menuStyles} id="mobile-menu">
          {user ? (
            <div className="pt-8 md:pt-0 flex flex-col md:flex-row md:items-center">
              <ul className="flex flex-col md:flex-row md:items-center md:mt-0 md:text-sm md:font-medium">
                {menuItems()}
                <li>
                  <Link href="/dashboard">
                    <a>
                      <button
                        onClick={() => setDisplayMenu(false)}
                        className="block py-2 pr-4 mr-4 pl-3 text-orange-500 bg-white font-bold text-lg rounded-lg"
                      >
                        Dashboard
                      </button>
                    </a>
                  </Link>
                </li>
                <li>
                  <button
                    onClick={logOut}
                    className="h-10 rounded border mx-3 md:mx-0 px-3 border-white text-white font-bold text-lg"
                  >
                    Log out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div>
              <ul className="flex flex-col mt-4 md:flex-row md:items-center md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                {menuItems()}
                <li>
                  <Link href="/signup">
                    <a>
                      <button
                        onClick={() => setDisplayMenu(false)}
                        className="block py-2 pr-4 pl-3 text-white font-bold text-lg"
                      >
                        Sign up
                      </button>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/login">
                    <a>
                      <button
                        onClick={() => setDisplayMenu(false)}
                        className="h-10 rounded border mx-3 md:mx-0 px-3 border-white text-white font-bold text-lg"
                      >
                        Log in
                      </button>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
