import type { NextPage } from 'next'
// Components
import MainLayout from 'src/layouts'
// Models
import { PageWithMainLayout } from 'src/models/nextPage'

const Dashboard: NextPage = () => {
  return <div className="w-80 mx-auto">Dashboard</div>
}

;(Dashboard as PageWithMainLayout).layout = MainLayout

export default Dashboard
