import type { NextPage } from 'next'

// Components
import MainLayout from 'src/layouts'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
// Models
import { PageWithMainLayout } from 'src/models/nextPage'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Picopala Web</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-12 pb-20 md:pb-32">
        <div className="col-span-full md:col-span-6 flex flex-col justify-center pb-12 md:pb-20">
          <h1 className="w-full text-center md:text-left text-3xl md:text-5xl pb-4 font-medium">
            Get pure Bitcoin returns!
          </h1>
          <h3 className="w-full text-center md:text-left text-xl md:text-3xl text-gray-800 pb-8">
            Make them work 💪🏼
          </h3>
          <div className="flex justify-center md:justify-start">
            <div className="w-40">
              <Link href="/signup">
                <a>
                  <button className=" w-full h-10 rounded bg-orange-500 shadow-sm">
                    <span className="font-bold text-white">Start earning</span>
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-full md:col-span-6">
          <div className="max-w-xs mx-auto">
            <Image
              src="/ilustration_front.svg"
              alt="picopala"
              layout="responsive"
              width={'100%'}
              height={'100%'}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 pb-10 md:pb-16">
        <div className="col-span-full text-2xl md:text-3xl text-gray-800 pb-8 text-center font-medium">
          How does Picopala work?
        </div>
        <div className="flex flex-col md:flex-row items-center md:justify-around col-span-full">
          <div className="flex flex-col items-center w-56 px-4 py-6 mb-4 rounded-lg shadow-lg">
            <div className="w-32 h-32">
              <Image
                src="/picopala_icono_circulo.png"
                alt="picopala-icono"
                layout="responsive"
                width={'100%'}
                height={'100%'}
              />
            </div>
            <span className="text-lg text-center">We receive the funds</span>
          </div>
          <div className="flex flex-col items-center w-56 px-4 py-6 mb-4 rounded-lg shadow-lg">
            <div className="w-32 h-32">
              <Image
                src="/picopala_icono_circulo.png"
                alt="picopala"
                layout="responsive"
                width={'100%'}
                height={'100%'}
              />
            </div>{' '}
            <span className="text-lg text-center">
              {' '}
              We buy the best ASICs in the market
            </span>
          </div>
          <div className="flex flex-col items-center w-56 px-4 py-6 mb-4 rounded-lg shadow-lg">
            <div className="w-32 h-32">
              <Image
                src="/picopala_icono_circulo.png"
                alt="picopala"
                layout="responsive"
                width={'100%'}
                height={'100%'}
              />
            </div>
            <span className="text-lg text-center">We put them to work</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 bg-orange-300 -mx-4 md:-mx-8 py-10 md:py-16">
        <div className="col-span-full text-2xl md:text-3xl text-gray-800 pb-8 text-center font-medium">
          Who is investing in Picopala?
        </div>
        <div className="col-span-full text-lg text-center pb-6 md:pb-10 max-w-xs mx-auto md:max-w-md">
          More than 30 Bitcoins under management from 100 customers
        </div>
        <div className="col-span-full">
          <div className="w-60 mx-auto">
            <Image
              src="/two_bitcoin_symbols.png"
              alt="picopala"
              layout="responsive"
              width={'100%'}
              height={'100%'}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 py-10 md:py-16">
        <div className="col-span-full text-2xl md:text-3xl text-gray-800 pb-8 text-center font-medium">
          Are you ready to start growning your Bitcoin?
        </div>
        <div className="col-span-full">
          <div className="w-40 mx-auto">
            <Link href="/signup">
              <a>
                <button className=" w-full h-10 rounded bg-orange-500 shadow-sm">
                  <span className="font-bold text-white">Start earning</span>
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

;(Home as PageWithMainLayout).layout = MainLayout

export default Home
