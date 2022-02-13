import { NextPage } from 'next'
import DefaultLayout from '../layouts/default'
import MinimalLayout from '../layouts/minimal'

type PageWithDefaultLayoutType = NextPage & { layout: typeof DefaultLayout }

type PageWithMinimalLayoutType = NextPage & { layout: typeof MinimalLayout }

type PageWithLayoutType = PageWithDefaultLayoutType | PageWithMinimalLayoutType

export default PageWithLayoutType
