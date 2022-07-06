import type { NextPage } from 'next'
// Components
import Image from 'next/image'
import Link from 'next/link'
import MainLayout from 'src/layouts'
// Models
import { PageWithMainLayout } from 'src/models/nextPage'

const AboutUs: NextPage = () => {
  return (
    <div>
      <div className="text-center py-12 md:py-16">
        <h1 className="text-3xl md:text-5xl font-medium pb-8 md:pb-12">
          We believe in Bitcoin
        </h1>
        <span className="text-xl md:text-3xl text-gray-800 ">
          Our mission is to provide good and sustainable interest rates for
          Bitcoin investments and to foster good practices and transparency in
          the market.{' '}
        </span>
      </div>

      <div>
        <h2 className="text-2xl md:text-4xl font-medium text-center pb-8 md:pb-12">
          Meet our Team
        </h2>
        <div className="sm:flex sm:justify-center">
          <div className="px-8">
            <Link href="https://www.linkedin.com/in/vicente-robirosa-429017a8/">
              <a target="_blank" rel="noopener">
                <div className="w-40 h-40 mx-auto  md:w-48 md:h-48 mb-4 rounded-lg border border-slate-300 overflow-hidden">
                  <Image
                    src="/founders/vicente.jfif"
                    alt="picopala-founder"
                    layout="responsive"
                    width={'100%'}
                    height={'100%'}
                  />
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-xl text-gray-800 font-bold">
                    Vicente Robirosa
                  </span>
                  <span className="text-lg text-orange-500">
                    Co-founder & CEO
                  </span>
                </div>
              </a>
            </Link>
          </div>
          <div className="px-8">
            <Link href="https://www.linkedin.com/in/luciosanguinetti/">
              <a target="_blank" rel="noopener">
                <div className="w-40 h-40 mx-auto  md:w-48 md:h-48 mb-4 rounded-lg border border-slate-300 overflow-hidden">
                  <Image
                    src="/founders/lucio.jfif"
                    alt="picopala-founder"
                    layout="responsive"
                    width={'100%'}
                    height={'100%'}
                  />
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-xl text-gray-800 font-bold">
                    Lucio Sanguinetti
                  </span>
                  <span className="text-lg text-orange-500">
                    Co-founder and Head of Sales
                  </span>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

;(AboutUs as PageWithMainLayout).layout = MainLayout

export default AboutUs
