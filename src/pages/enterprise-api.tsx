/* eslint-disable @next/next/no-sync-scripts */
import type { NextPage } from 'next'
// Components
import MainLayout from 'src/layouts'
import Head from 'next/head'
// Models
import { PageWithMainLayout } from 'src/models/nextPage'

const EnterpriseApi: NextPage = () => {
  return (
    <div className=" py-12 md:py-16 max-w-lg mx-auto">
      <Head>
        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js.hs-scripts.com/8205013.js"
        ></script>
        <script
          charSet="utf-8"
          type="text/javascript"
          src="//js.hsforms.net/forms/v2.js"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            hbspt.forms.create({
              region: "na1",
              portalId: "22285624",
              formId: "ed411f93-b4a3-4a6d-8e86-799c474102b3",
              target: '#hubspotForm'
            });
          `,
          }}
        />
      </Head>
      <h1 className="font-bold text-2xl md:text-3xl pb-6">
        Get in touch with us to learn more about our enterprise API.
      </h1>
      <div>
        <div id="hubspotForm"></div>
      </div>
    </div>
  )
}

;(EnterpriseApi as PageWithMainLayout).layout = MainLayout

export default EnterpriseApi
