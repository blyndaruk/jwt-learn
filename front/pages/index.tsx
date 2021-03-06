import type { NextPage } from 'next'
import styles from '@/styles/Home.module.css'
import DefaultLayout from '@/layouts/default';

const Home: NextPage = () => {
  return (
      <DefaultLayout title="JWT Learn">
        <div className={styles.container}>
          <main className={styles.main}>
            Main
          </main>
        </div>
      </DefaultLayout>
  )
}

export default Home
