import { NextPage } from 'next'
import MainLayout from 'src/layouts'

export type PageWithMainLayout = NextPage & { layout: typeof MainLayout }

export type PageWithLayout = PageWithMainLayout
