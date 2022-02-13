import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import PageWithLayoutType from '@/types/pageWithLayout';
import DefaultLayout from '@/layouts/default';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="JWT Learn" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        Main
      </main>
    </div>
  )
}
(Home as PageWithLayoutType).layout = DefaultLayout

export default Home
